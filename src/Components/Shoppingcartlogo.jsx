import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import style from "./Shoppingcartlogo.module.css";
import Typography from "@mui/material/Typography";

function ShoppingCartItemCounter({ items }) {
  return (
    <div className={style.circleIcon}>
      <Typography className={style.countText} color="white" variant="body2">
        {items}
      </Typography>
    </div>
  );
}

function ShoppingCartIcon() {
  return (
    <div className={style.flexContainer}>
      <ShoppingCartSharpIcon
        color="white"
        fontSize="large"
      ></ShoppingCartSharpIcon>
    </div>
  );
}
function Shoppingcartlogo({ items }) {
  return (
    <div className={style.container}>
      {items > 0 && <ShoppingCartItemCounter items={items} />}
      <ShoppingCartIcon />
    </div>
  );
}

export default Shoppingcartlogo;
