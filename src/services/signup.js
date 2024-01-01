import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase.js";

async function signup({ email, name, password }) {
  console.log(email, name, password);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

function useSignUp() {
  return useMutation({
    mutationFn: signup,
    onError: (error) => {
      console.log(error.message);
      throw new Error(error.message);
    },
  });
}

export default useSignUp;
