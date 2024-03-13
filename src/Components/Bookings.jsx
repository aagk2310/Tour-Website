import style from "./Bookings.module.css";
function Bookings({ img, tour, bookingDate, tourDate }) {
  console.log("Inside bOOkings");
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <img src={img} alt="" className={style.imgTour} />
        <div className={style.tourContainer}>{tour}</div>
      </div>
      <div className={style.bookingContainer}>
        <div>Trip Date: {tourDate}</div>
        <div>Booked On: {bookingDate}</div>
      </div>
    </div>
  );
}

export default Bookings;
