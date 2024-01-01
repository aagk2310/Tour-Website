import { useEffect, useState } from "react";
import useGetUserBookings from "../services/userbookings";
import { useLocation } from "react-router-dom";
import useGetTours from "../services/tours";

function BookingsPage() {
  const { state } = useLocation();
  const { mutate, isPending, isSuccess, data } = useGetUserBookings();
  const {
    data: tourData,
    isPending: isTourDataPending,
    isSuccess: isTourFetchSuccess,
  } = useGetTours();

  const [tourImageObj, setTourImageObj] = useState({});
  const [runThirdEffect, setRunThirdEffect] = useState(false);
  const [runFourthEffect, setRunFourthEffect] = useState(false);
  const [bookedToursByUser, setBookedToursByUser] = useState([]);
  const [bookingsDate, setBookingsDate] = useState([]);
  const [tripDate, setTripDate] = useState([]);

  useEffect(() => {
    mutate(state.userId);
  }, [state.userId, mutate]);

  useEffect(() => {
    if (!isTourDataPending && isTourFetchSuccess) {
      console.log("Tour Fetch success");
      const updatedTourImageObj = {};
      tourData.forEach((tour) => {
        updatedTourImageObj[tour.id.toString()] = tour.image_url;
      });
      setTourImageObj(updatedTourImageObj);
      console.log("Object");
      console.log(updatedTourImageObj);
      setRunThirdEffect(true);
    }
  }, [isTourDataPending, isTourFetchSuccess, tourData]);

  useEffect(() => {
    if (!isPending && isSuccess && runThirdEffect) {
      console.log("Booking fetch successful");
      const newBookedToursByUser = data.map((booking) =>
        booking["Trip Id"].toString()
      );
      const newBookingsDate = data.map((booking) => booking["Booking Date"]);
      const newTripDate = data.map((booking) => booking["Trip Date"]);

      setBookedToursByUser(newBookedToursByUser);
      setBookingsDate(newBookingsDate);
      setTripDate(newTripDate);

      setRunFourthEffect(true);
    }
  }, [isPending, isSuccess, data, runThirdEffect]);

  useEffect(() => {
    if (isSuccess && isTourFetchSuccess && runThirdEffect && runFourthEffect) {
      console.log("Everything success");
      console.log(tourImageObj["1"]);
      console.log(bookedToursByUser.length);

      const bookedToursImages = bookedToursByUser.map(
        (tourId) => tourImageObj[tourId]
      );
      console.log("Booked Tours Images");
      console.log(bookedToursImages);
    }
  }, [
    isSuccess,
    isTourFetchSuccess,
    bookedToursByUser,
    tourImageObj,
    runThirdEffect,
    runFourthEffect,
  ]);

  return (
    <>
      <div>Bookings</div>
    </>
  );
}

export default BookingsPage;
