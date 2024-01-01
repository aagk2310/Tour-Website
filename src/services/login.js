import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase";

async function login({ email, password }) {
  console.log("Inside login");
  console.log(email, password);
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}
function useLogin() {
  return useMutation({
    mutationFn: login,
    onError: (err) => {
      console.log(err);
      throw new Error(err.message);
    },
  });
}

export default useLogin;
