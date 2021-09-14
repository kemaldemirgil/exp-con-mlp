import React from "react";
import "./red.css";
import Button from "../Button";
import speaker1 from "../../assets/speaker-right.png";
import speaker2 from "../../assets/speaker-left.png";

const Red = () => {
  return (
    <div className="red">
      <div className="red-container">
        <div className="button-container">
          <Button text="TRY IT NOW" />
        </div>
        <div className="red-wrapper">
          <div className="red-sub-container">
            <h2>Superior Sound</h2>
            <p>
              Experience live versions of your <br /> favourite songs.
            </p>
            <Button text="TRY IT NOW" />
          </div>
          <div className="red-sub-img-container">
            <img
              src={speaker1}
              alt="speaker"
              width="80%"
              style={{ width: "270px" }}
            />
          </div>
          <div className="red-sub-img-container2">
            <img
              src={speaker2}
              alt="speaker"
              width="80%"
              style={{ width: "270px", paddingLeft: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Red;
