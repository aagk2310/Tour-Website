import { useState } from "react";
import Button from "../Components/Button";
import CardGrid from "../Components/CardGrid";
import Hero from "../Components/Hero";
import NavButton from "../Components/NavButton";
import style from "./HomePage.module.css";
import NavigationMenu from "../Components/NavigationMenu";
import Footer from "../Components/Footer";

function HeroContent() {
  return (
    <>
      <div>
        <div className={style.mainTagline}>Discover</div>
        <p className={style.secondaryTagline}>Another Destination</p>
      </div>
      <Button backgroundColor="#fff" color="#000">
        Check our tours
      </Button>
    </>
  );
}

function HomePage() {
  const [navState, setNavState] = useState(false);
  return (
    <div className="home">
      <NavButton state={navState} setState={setNavState} />
      <Hero>
        <HeroContent />
      </Hero>
      <div style={{ marginTop: "5%" }} />
      <div className={style.heading}>OUR TOURS</div>
      <CardGrid />

      {navState ? (
        <NavigationMenu state={navState} setState={setNavState} />
      ) : (
        false
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
