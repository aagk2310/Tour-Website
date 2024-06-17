import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import style from "./Login.module.css";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import useLogin from "../services/login";
import AlertMessage from "./AlertMessage";
import { useForm } from "react-hook-form";
import CircularSpinner from "./CircularSpinner";

function Login() {
  const navigate = useNavigate();
  const { isPending, isSuccess, error, mutate, data } = useLogin();
  const [showAlert, setShowAlert] = useState(null);
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (show && !isPending) {
      if (!isSuccess) {
        setShowAlert({
          isSuccess: false,
          message: error ? error.message : "Something went wrong",
        });
      } else {
        setShowAlert(null);
        localStorage.setItem("supabaseToken", data);
        navigate("/dashboard");
      }
    }
  }, [isSuccess, isPending, show, error]);
  function onSubmit(data) {
    // console.log("Inside onsubmit");
    // console.log(data);
    mutate(data);
    setShow(true);
  }

  return (
    <>
      <NavButton
        type="back"
        onClick={() => {
          navigate(-1);
        }}
      />
      <div className={style.main}>
        <div className={style.loginForm}>
          <h2 className={style.headingSecondary}>Log into your account</h2>
          <form
            className={style.form}
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <div className={style.formGroup}>
              <label className={style.formLabel} htmlFor="email">
                Email address
              </label>
              <input
                className={style.formInput}
                id="email"
                type="email"
                placeholder="you@example.com"
                required="required"
                {...register("email")}
              />
            </div>
            <div className={style.formGroup}>
              <label className={style.formLabel} htmlFor="password">
                Password
              </label>
              <input
                className={style.formInput}
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
                {...register("password")}
              />
            </div>
            <div className={style.formGroup}>
              <Button>{!isPending ? "Log In" : <CircularSpinner />}</Button>
            </div>
          </form>
        </div>
      </div>
      {!isPending && showAlert ? (
        <AlertMessage status={showAlert} setShow={() => setShowAlert(null)} />
      ) : (
        false
      )}
      {/* // ) : !isPending ? (
      //   <Navigate to="/dashboard" />
      // ) : (
      //   false
      // )} */}
    </>
  );
}

export default Login;
