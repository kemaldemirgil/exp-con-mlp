import React from "react";
import "./perks.css";
import Button from "../Button";

const Perks = () => {
  return (
    <div id="perks" className="perks">
      <div className="button-container">
        <Button text="TRY IT NOW" location="pricing" />
      </div>
      <div className="perks-container">
        <div className="perks-section">
          <h1>PERKS</h1>
          <br />
          <h3 style={{ color: "red" }}>______</h3>
          <h2 style={{ color: "red" }}>
            Subscription
            <br />
            Payment
            <br />
            Model
          </h2>
          <p>
            No commitment,
            <br />
            cancel anytime. Never
            <br />
            worry about forgetting
            <br />a payment again!
          </p>
        </div>
        <div className="perks-section" style={{ marginTop: "6rem" }}>
          <h3 style={{ color: "aqua" }}>______</h3>
          <h2 style={{ color: "aqua" }}>
            No Fee
            <br />
            Cancelation
            <br />
            Policy
          </h2>
          <p>
            No commitment,
            <br />
            cancel anytime. Never
            <br />
            worry about forgetting
            <br />a payment again!
          </p>
        </div>
        <div className="perks-section" style={{ marginTop: "6rem" }}>
          <h3 style={{ color: "gold" }}>______</h3>
          <h2 style={{ color: "gold" }}>
            Subscription
            <br />
            Payment
            <br />
            Model
          </h2>
          <p>
            No commitment,
            <br />
            cancel anytime. Never
            <br />
            worry about forgetting
            <br />a payment again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
