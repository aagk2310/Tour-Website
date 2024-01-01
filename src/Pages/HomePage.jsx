import { useState } from "react";
import Button from "../Components/Button";
import CardGrid from "../Components/CardGrid";
import Hero from "../Components/Hero";
import NavButton from "../Components/NavButton";
import style from "./HomePage.module.css";
import NavigationMenu from "../Components/NavigationMenu";

function HomePage() {
  const [navState, setNavState] = useState(false);
  return (
    <div>
      {/* <Navigation /> */}
      <NavButton state={navState} setState={setNavState} />
      <Hero>
        <div>
          <div className={style.mainTagline}>Discover</div>
          <p className={style.secondaryTagline}>Another Destination</p>
        </div>
        <Button backgroundColor="#fff" color="#000">
          Check our tours
        </Button>
      </Hero>
      <div style={{ marginTop: "10%" }} />
      <CardGrid />

      {navState ? (
        <NavigationMenu state={navState} setState={setNavState} />
      ) : (
        false
      )}
    </div>
  );
}

export default HomePage;
