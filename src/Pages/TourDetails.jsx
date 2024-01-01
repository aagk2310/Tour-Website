import { useNavigate, useParams } from "react-router-dom";
import Hero from "../Components/Hero";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";
import supabase from "../services/supabase";
import HeadingTertiary from "../Components/HeadingTertiary";
import NavButton from "../Components/NavButton";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  let { data, isLoading, error } = useQuery({
    queryKey: ["tourDetails"],
    queryFn: async function () {
      const response = await supabase
        .from("Tours")
        .select("*")
        .eq("id", `${id}`);
      return response.data;
    },
  });

  if (isLoading || error) {
    if (error) {
      console.log(error);
    }
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    console.log(data);
    function navigateBack() {
      navigate(-1);
    }
    return (
      <>
        <NavButton onClick={navigateBack} type="back" />

        <Hero img={data[0].image_url} overlay={false}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HeadingTertiary text={data[0].tour_type} isDetails={true} />
          </div>
        </Hero>
        <div>{data[0].long_desc}</div>
      </>
    );
  }
}

export default TourDetails;
