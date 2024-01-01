import style from "./Button.module.css";
function Button({
  onClick,
  type = "sm",
  backgroundColor = "#855cff",
  color = "#fff",
  children = null,
}) {
  return (
    <div className={style.container}>
      <button
        className={type === "sm" ? style.btnSmall : style.btnLarge}
        onClick={onClick}
        style={{ backgroundColor, color }}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
