import style from "./Bookings.module.css";
function Bookings({ img, tour, bookingDate, tourDate }) {
  return (
    <div className={style.container}>
      <img src={img} alt="" className={style.imgTour} />
      <div className={style.subContainer}></div>
    </div>
  );
}

export default Bookings;
