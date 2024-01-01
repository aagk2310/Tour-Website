import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetTours() {
  return useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Tours").select("*");
      if (error) throw new Error(error.message);
      else return data;
    },
  });
}

export default useGetTours;
