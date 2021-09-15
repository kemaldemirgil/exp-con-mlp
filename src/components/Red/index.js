import React from "react";
import "./red.css";
import Button from "../Button";
import speaker1 from "../../assets/speaker-right.png";
import speaker2 from "../../assets/speaker-left.png";
import music from "../../assets/benny.mp3";

const Red = () => {
  const togglePlay = () => {
    if (document.getElementById("myAudio") !== null) {
      const myAudio = document.getElementById("myAudio");
      return myAudio.paused ? myAudio.play() : myAudio.pause();
    }
  };

  return (
    <div className="red">
      <audio id="myAudio" src={music} preload="auto" />
      <div className="red-container">
        <div className="button-container">
          <Button text="TRY IT NOW" location="pricing#start-today" />
        </div>
        <div className="red-wrapper">
          <div className="red-sub-container">
            <h2>Superior Sound</h2>
            <p>
              Experience live versions of your <br /> favourite songs.
            </p>
            <Button text="SEE DEMO" location="#" />
          </div>
          <div
            className="red-sub-img-container"
            data-tooltip="Hey! Click on me!"
          >
            <img
              onClick={togglePlay}
              src={speaker1}
              alt="speaker"
              width="80%"
              style={{ width: "270px" }}
            />
          </div>
          <div
            className="red-sub-img-container2"
            data-tooltip="No! Click on me!"
          >
            <img
              onClick={togglePlay}
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
