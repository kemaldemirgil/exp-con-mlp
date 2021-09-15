import React from "react";
import "./yellow.css";
import img from "../../assets/4.gif";
import Button from "../Button";

const Yellow = () => {
  return (
    <div className="yellow">
      <div className="button-container">
        <Button text="TRY IT NOW" location="pricing#start-today" />
      </div>
      <div className="yellow-container">
        <div className="yellow-img">
          <img src={img} alt="crowd" />
        </div>
        <div className="yellow-text">
          <h2>Front Row Seats</h2>
          <p>Experience concerts up close and personal.</p>
          <Button text="SEE DEMO" location="#" />
        </div>
      </div>
    </div>
  );
};

export default Yellow;
