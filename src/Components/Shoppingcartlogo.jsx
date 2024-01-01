import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import style from "./Shoppingcartlogo.module.css";
import Typography from "@mui/material/Typography";
function Shoppingcartlogo({ items }) {
  return (
    <div className={style.container}>
      {items > 0 ? (
        <div className={style.circleIcon}>
          <Typography className={style.countText} color="white" variant="body2">
            {items}
          </Typography>
        </div>
      ) : (
        false
      )}
      <div className={style.flexContainer}>
        <ShoppingCartSharpIcon
          color="white"
          fontSize="large"
        ></ShoppingCartSharpIcon>
      </div>
    </div>
  );
}

export default Shoppingcartlogo;
