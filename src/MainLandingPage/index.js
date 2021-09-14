import React from "react";
import Menu from "../components/Menu";
import Slider from "../components/Slider";
import Red from "../components/Red";
import Yellow from "../components/Yellow";
import Perks from "../components/Perks";
import Reviews from "../components/Reviews";

const MainLandingPage = () => {
  return (
    <div className="app">
      <Menu />
      <Slider />
      <Red />
      <Yellow />
      <Perks />
      <Reviews />
    </div>
  );
};

export default MainLandingPage;
