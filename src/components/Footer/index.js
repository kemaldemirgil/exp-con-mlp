// imports...................
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

// footer...................
const Footer = () => {
  return (
    <div className="footer">
      <p className="email">&#9993; support@experienceconcerts.co</p>
      <div className="copyright">
        <Link className="title" to="/">
          EXP|CON
        </Link>
        <p>2019 &#169; All Rights Reserved | Speer Technologies Incorporated</p>
      </div>
    </div>
  );
};

// exports...................
export default Footer;
