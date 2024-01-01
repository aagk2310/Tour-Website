import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

function DashBoardPage({ name, userId }) {
  return (
    <>
      <Navigation name={name} userId={userId} />;
      <Outlet />
    </>
  );
}

export default DashBoardPage;
