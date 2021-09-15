import React from "react";
import "./pricing.css";
import PaymentButton from "../PaymentButton";

const Pricing = () => {
  return (
    <div className="pricing" id="start-today">
      <div className="pricing-info">
        <h1>Pricing</h1>
        <p>
          Test out our app today! Choose from three subscription
          <br />
          Based payment models.
        </p>
      </div>
      <div className="pricing-container">
        <div className="pricing-section">
          <h2 style={{ color: "#a22d2d" }}>Basic</h2>
          <h3 style={{ color: "#a22d2d" }}>________</h3>
          <h2 style={{ color: "#a22d2d" }}>
            Monthly
            <br />
            <span style={{ color: "#a22d2d" }}>$9</span>
          </h2>
          <ul>
            <li>&#9834; Very good</li>
            <li>&#9834; Amazing</li>
            <li>&#9834; Perfect job</li>
            <li>&#9834; Love this</li>
            <li>&#9834; It's so good</li>
            <li>&#9834; Features</li>
          </ul>
          <br />
          <PaymentButton color="#a22d2d" />
        </div>
        <div className="pricing-section">
          <h2 style={{ color: "gold" }}>Advanced</h2>
          <h3 style={{ color: "gold" }}>________</h3>
          <h2 style={{ color: "gold" }}>
            Yearly
            <br />
            <span style={{ color: "gold" }}>$99</span>
          </h2>
          <ul>
            <li>&#9834; Very very good</li>
            <li>&#9834; Even Amazing</li>
            <li>&#9834; Perfect job</li>
            <li>&#9834; Love this more</li>
            <li>&#9834; It's so so good</li>
            <li>&#9834; More Features</li>
          </ul>
          <br />
          <PaymentButton color="gold" />
        </div>
        <div className="pricing-section">
          <h2 style={{ color: "aqua" }}>Pro</h2>
          <h3 style={{ color: "aqua" }}>________</h3>
          <h2 style={{ color: "aqua" }}>
            Yearly
            <br />
            <span style={{ color: "aqua" }}>$120</span>
          </h2>
          <ul>
            <li>&#9834; Very very good</li>
            <li>&#9834; Even more</li>
            <li>&#9834; Perfect job</li>
            <li>&#9834; Love this more</li>
            <li>&#9834; It's so so good</li>
            <li>&#9834; More Features</li>
          </ul>
          <br />
          <PaymentButton color="aqua" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
