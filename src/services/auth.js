import { useMutation, useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

async function getUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) {
    throw new Error("session does not exist");
  } else {
    console.log(session);
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      throw new Error(error.message);
    }

    // console.log("User metadata");
    // console.log(data.user_metadata);

    return data?.user;
  }
}

function useAuthenticate() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
}

export default useAuthenticate;
