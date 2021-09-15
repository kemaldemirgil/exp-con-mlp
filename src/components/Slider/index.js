import React from "react";
import "./slider.css";
import Button from "../Button";

const Slider = () => {
  let slide = 2;

  setInterval(() => {
    if (window.location.pathname === "/") {
      if (slide === 4) {
        slide = 1;
      }
      document.querySelector(".slide-radio" + slide).checked = true;
      slide++;
    }
  }, 10000);

  return (
    <div>
      <div className="slider-wrapper">
        <input
          type="radio"
          name="slider"
          className="slide-radio1"
          defaultChecked
          id="slider_1"
        />
        <input
          type="radio"
          name="slider"
          className="slide-radio2"
          id="slider_2"
        />
        <input
          type="radio"
          name="slider"
          className="slide-radio3"
          id="slider_3"
        />

        <div className="slider-pagination">
          <label htmlFor="slider_1" className="page1"></label>
          <label htmlFor="slider_2" className="page2"></label>
          <label htmlFor="slider_3" className="page3"></label>
        </div>

        <div className="slider slide1">
          <div>
            <h2>Interactive Concert Experience</h2>
            <p>
              Experience your favourite artists like never
              <br /> before and from the comfort of your own home.
            </p>
            <Button text="TRY IT NOW" location="pricing" />
          </div>
        </div>
        <div className="slider slide2">
          <div>
            <h2>Interactive Concert Experience</h2>
            <p>
              Experience your favourite artists like never
              <br /> before and from the comfort of your own home.
            </p>
            <Button text="TRY IT NOW" location="pricing" />
          </div>
        </div>
        <div className="slider slide3">
          <div>
            <h2>Interactive Concert Experience</h2>
            <p>
              Experience your favourite artists like never
              <br /> before and from the comfort of your own home.
            </p>
            <Button text="TRY IT NOW" location="pricing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
