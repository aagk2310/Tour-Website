import Bookings from "./Bookings";
import style from "./BookingsGrid.module.css";

function BookingsGrid({
  bookingImages,
  tourNames = "Taj Mahal",
  bookingDates,
  tourDates,
}) {
  console.log("Inside bookings grid");
  return (
    <div className={style.container}>
      {bookingImages.map((bookingImage, index) => (
        <Bookings
          key={index}
          img={bookingImage}
          bookingDate={bookingDates[index]}
          tourDate={tourDates[index]}
          tour={tourNames[index]}
        />
      ))}
    </div>
  );
}

export default BookingsGrid;
