import React from "react";
import "./paymentButton.css";
import { Link } from "react-router-dom";

const PaymentButton = ({ color }) => {
  const buttonMove = (e) => {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };
  return (
    <div>
      <Link to="/payment">
        <button
          className="payment-button"
          style={{ backgroundColor: `${color}` }}
          onMouseMove={buttonMove}
        >
          <span>SELECT</span>
        </button>
      </Link>
    </div>
  );
};

export default PaymentButton;
