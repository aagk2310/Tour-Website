import { Divider, List, ListItem, ListItemText } from "@mui/material";
import style from "./NavigationMenu.module.css";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
function NavigationMenu({ state, setState }) {
  return (
    <>
      <div
        className={style.overlay}
        onClick={() => {
          setState((s) => !s);
        }}
      ></div>
      <div className={style.modalCard}>
        <List>
          <ListItem>
            <HomeIcon />
            <ListItemText
              primary="See Tours"
              className={style.listItem}
            ></ListItemText>
          </ListItem>
          <Divider />
          <Link to={"/login"}>
            <ListItem>
              <LoginSharpIcon />
              <ListItemText
                primary="Log In"
                className={style.listItem}
              ></ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to={"/signup"}>
            <ListItem>
              <ListItemText
                primary="Sign Up"
                className={style.listItem}
              ></ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    </>
  );
}

export default NavigationMenu;
