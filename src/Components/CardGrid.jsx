import Card from "./Card";
import style from "./CardGrid.module.css";
import supabase from "../services/supabase";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress } from "@mui/material";
import CircularSpinner from "./CircularSpinner";
// const places = [
//   "Taj Mahal",
//   "Victoria Memorial",
//   "Golden Temple",
//   "India Gate",
//   "Charminar",
// ];
// const imgNames = ["taj", "vict", "gold", "gate", "charminar"];

function CardGrid() {
  let { data, isLoading, error } = useQuery({
    queryKey: ["tours"],
    queryFn: async function () {
      const response = await supabase.from("Tours").select("*");
      return response.data;
    },
  });
  let places = [];
  let images = [];
  let keys = [];
  let taglines = [];

  if (isLoading) {
    return <CircularSpinner />;
  }

  if (!isLoading && !error) {
    data = data.sort((a, b) => a.id - b.id);

    places = data.map((d) => d.tour_type);
    images = data.map((d) => d.image_url);
    keys = data.map((d) => d.id);
    taglines = data.map((d) => d.short_desc);
    console.log(places, images);
  }
  // console.log(data);

  return (
    <div className={style.cardContainer} id="section">
      {places.map((place, index) => {
        return (
          <Card
            place={place}
            imageName={images[index]}
            key={keys[index]}
            tagline={taglines[index]}
            id={keys[index]}
          />
        );
      })}
    </div>
  );
}

export default CardGrid;
