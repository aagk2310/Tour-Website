import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../Components/Navigation";
import CardGrid from "../Components/CardGrid";
import style from "./DashBoardPage.module.css";

function DashBoardPage({ name, userId }) {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  // const isBookingsPage = location.pathname === "/dashboard/bookings";
  return (
    <>
      <Navigation name={name} userId={userId} />
      {isDashboardPage ? (
        <>
          <div className={style.dashcard}>
            <CardGrid />
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default DashBoardPage;
