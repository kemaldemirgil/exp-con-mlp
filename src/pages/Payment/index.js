// imports...................
import React from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import PaymentSection from "../../components/Payment";

// payment...................
const Payment = () => {
  return (
    <div>
      <div className="payment-page-menu">
        <Menu />
      </div>
      <PaymentSection />
      <Footer />
    </div>
  );
};

// exports...................
export default Payment;
