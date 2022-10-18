import React from "react";
import "./Footer.css";
import github from "../../../assets/github.png";
import linkedin from "../../../assets/linkedin.png";
import instagram from "../../../assets/instagram.png";
import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-sub">
        <div className="footer-images">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
      </div>
 <div className="blur footer-blur1"></div>
 <div className="blur footer-blur2"></div>
    </div>
  );
};

export default Footer;
