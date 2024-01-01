import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import style from "./Card.module.css";
import HeadingTertiary from "./HeadingTertiary";
function CardHeader({ imgName, place }) {
  return (
    <>
      <div className={style.cardHeader}>
        <div className={style.cardPicture}>
          {/* <div className={style.cardPictureOverlay}>&nbsp;</div> */}
          <img src={imgName} alt="" className={style.cardPictureImg} />
        </div>
        <HeadingTertiary text={place} />
      </div>
    </>
  );
}

function CardBody({ description }) {
  return <div className={style.headline}>{description}</div>;
}

function Card({ place, imageName, tagline, id }) {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    console.log("Button clicked!");
    navigate(`/tours/${id}`);
  };
  return (
    <div className={style.card}>
      <CardHeader imgName={imageName} place={place} />
      <CardBody description={tagline} />
      <Button onClick={handleExploreClick} type="lg">
        Explore
      </Button>
    </div>
  );
}

export default Card;
