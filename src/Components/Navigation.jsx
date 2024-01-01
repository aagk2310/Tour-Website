import { Link, NavLink, useNavigate } from "react-router-dom";
import Shoppingcartlogo from "./Shoppingcartlogo";
import Button from "./Button";
import supabase from "../services/supabase";

function Navigation({ name, userId }) {
  const navigate = useNavigate();
  async function signout() {
    let { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
    navigate("/login");
  }

  return (
    <nav
      style={{
        backgroundColor: "#444",
        height: "15vh",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "3%",
        paddingRight: "3%",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "20%",
          alignItems: "center",
        }}
      >{`Welcome, ${name}`}</div>
      <div
        style={{
          display: "flex",
          height: "100%",

          justifyContent: "end",
          alignItems: "center",
          columnGap: "2rem",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Link
            to={"bookings"}
            style={{ textDecoration: "none", color: "white" }}
            state={{ userId }}
          >
            MY BOOKINGS
          </Link>
        </ul>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {/* <NavLink style={{ color: "white" }}>LOG IN</NavLink>
        <button className="btn">
        <NavLink style={{ color: "white" }}>SIGN UP</NavLink>
      </button> */}

          <Shoppingcartlogo items={8} />
        </ul>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Button type="lg" onClick={signout}>
            Log out
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
