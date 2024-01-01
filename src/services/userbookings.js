import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase";

async function getUserBookings(userId) {
  let { data: Bookings, error } = await supabase
    .from("Bookings")
    .select("*")
    .eq("User Id", userId)
    .order("Booking Date");
  if (error) {
    throw new Error(error.message);
  } else return Bookings;
}
function useGetUserBookings() {
  return useMutation({
    mutationFn: getUserBookings,
    onError: (err) => {
      console.log(err);
      throw new Error(err.message);
    },
  });
}

export default useGetUserBookings;
