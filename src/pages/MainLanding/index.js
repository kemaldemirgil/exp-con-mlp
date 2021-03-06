// imports...................
import React from "react";
import Menu from "../../components/Menu";
import Slider from "../../components/Slider";
import Red from "../../components/Red";
import Yellow from "../../components/Yellow";
import Perks from "../../components/Perks";
import Reviews from "../../components/Reviews";
import GetExp from "../../components/GetExp";
import Footer from "../../components/Footer";

// mainlanding...................
const MainLanding = () => {
  return (
    <div>
      <Menu />
      <Slider />
      <Red />
      <Yellow />
      <Perks id="perks" />
      <Reviews />
      <GetExp />
      <Footer />
    </div>
  );
};

// exports...................
export default MainLanding;
