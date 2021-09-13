import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const onClickMenu = () => {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  };

  return (
    <>
      <div>
        <div id="menu-bar">
          <div id="menu" onClick={onClickMenu}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <ul className="nav" id="nav">
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="/#">Explore</Link>
            </li>
            <li>
              <Link to="/#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-bg" id="menu-bg"></div>
      </div>
      <span className="exp-con-title">
        <Link to="/#">EXP|CON</Link>
      </span>
    </>
  );
};

export default Menu;
