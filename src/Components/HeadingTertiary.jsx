import style from "./HeadingTertiary.module.css";
function HeadingTertiary({ text, isDetails = false }) {
  return (
    <h3
      className={
        isDetails ? style.headingTertiaryTourDetails : style.headingTertiaryTour
      }
    >
      <span>{text}</span>
    </h3>
  );
}

export default HeadingTertiary;
