import { useEffect, useState } from "react";
import useGetUserBookings from "../services/userbookings";
import { useLocation } from "react-router-dom";
import useGetTours from "../services/tours";
import BookingsGrid from "../Components/BookingsGrid";
import CircularSpinner from "../Components/CircularSpinner";

function BookingsPage() {
  const { state } = useLocation();
  const { mutate, isPending, isSuccess, data } = useGetUserBookings();
  const {
    data: tourData,
    isPending: isTourDataPending,
    isSuccess: isTourFetchSuccess,
  } = useGetTours();

  const [tourImageObj, setTourImageObj] = useState({});
  const [tourNameObj, setTourNameObj] = useState({});
  const [runThirdEffect, setRunThirdEffect] = useState(false);
  const [runFourthEffect, setRunFourthEffect] = useState(false);
  const [bookedToursByUser, setBookedToursByUser] = useState([]);
  const [bookingsDate, setBookingsDate] = useState([]);
  const [tripDate, setTripDate] = useState([]);
  const [bookedToursImages, setBookedToursImages] = useState([]);
  const [bookedToursNames, setbookedToursNames] = useState([]);

  useEffect(() => {
    mutate(state.userId);
  }, [state.userId, mutate]);

  useEffect(() => {
    if (!isTourDataPending && isTourFetchSuccess) {
      console.log("Tour Fetch success");
      const updatedTourImageObj = {};
      const updatedTourNameObj = {};
      tourData.forEach((tour) => {
        updatedTourImageObj[tour.id.toString()] = tour.image_url;
        updatedTourNameObj[tour.id.toString()] = tour.tour_type;
      });
      setTourImageObj(updatedTourImageObj);
      setTourNameObj(updatedTourNameObj);
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

      const bookedToursImgs = bookedToursByUser.map(
        (tourId) => tourImageObj[tourId]
      );
      const bookedNames = bookedToursByUser.map(
        (tourId) => tourNameObj[tourId]
      );
      console.log("Booked Tours Images");
      console.log(bookedToursImgs);
      setBookedToursImages(bookedToursImgs);
      setbookedToursNames(bookedNames);
    }
  }, [
    isSuccess,
    isTourFetchSuccess,
    bookedToursByUser,
    tourImageObj,
    runThirdEffect,
    runFourthEffect,
  ]);

  if (!runFourthEffect) {
    return <CircularSpinner />;
  } else
    return (
      <>
        {bookedToursImages.length > 0 ? (
          <BookingsGrid
            bookingImages={bookedToursImages}
            bookingDates={bookingsDate}
            tourDates={tripDate}
            tourNames={bookedToursNames}
          />
        ) : (
          <div>No Bookings</div>
        )}
      </>
    );
}

export default BookingsPage;
