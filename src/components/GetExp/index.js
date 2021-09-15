import React from "react";
import "./getexp.css";
import Button from "../Button";

const GetExp = () => {
  return (
    <div className="getexp">
      <div className="getexp-text">
        <h2>Get EXP|CON Now</h2>
        <h3>Purchase and download the app.</h3>
      </div>
      <div className="getexp-button">
        <Button text="TRY IT NOW" location="pricing"/>
      </div>
    </div>
  );
};

export default GetExp;
