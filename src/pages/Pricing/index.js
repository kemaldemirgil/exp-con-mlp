import React from "react";
import PricingPerks from "../../components/PricingPerks";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import PricingSection from "../../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Menu />
      <PricingSection />
      <PricingPerks />
      <Footer />
    </div>
  );
};

export default Pricing;
