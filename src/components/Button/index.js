import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  const buttonMove = (e) => {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", x + "px");
    e.target.style.setProperty("--y", y + "px");
  };
  return (
    <div>
      <Link to="/pricing">
        <button className="button" onMouseMove={buttonMove}>
          <span>{text}</span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
