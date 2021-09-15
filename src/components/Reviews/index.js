import React from "react";
import "./reviews.css";
import Button from "../Button";
import img from "../../assets/round-speaker.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="button-container">
        <Button text="TRY IT NOW" location="pricing#start-today" />
      </div>
      <div className="reviews-container">
        <div className="reviews-img">
          <img src={img} width="370" height="300" alt="speaker" />
          <img
            src={img}
            width="370"
            height="300"
            alt="speaker"
            style={{ marginLeft: "5rem", transform: "rotate(180deg)" }}
          />
        </div>
        <div className="reviews-section">
          <div className="review-title">
            <h2>REVIEWS</h2>
          </div>
          <div className="review-wrapper">
            <div className="review">
              <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
              <h3>Artist</h3>
              <p>"Love it, it's the best. I can't live without it!"</p>
            </div>
            <div className="review">
              <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
              <h3>Producer</h3>
              <p>"Love it, it's the best. I can't live without it!"</p>
            </div>
            <div className="review">
              <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
              <h3>Music Fan</h3>
              <p>"Love it, it's the best. I can't live without it!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
