import React from "react";
import Header from "./Header/Header";
import heartlogo from "../../assets/heart.png";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <Header />
        {/* ad */}
        <div className="best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/*hero-text  */}
        <div className="h-text">
          <div>
            <span className="outline-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              maxime atque nostrum architecto odit reiciendis aliquid id,
              pariatur necessitat
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+120</span>
            <span>expect coaches</span>
          </div>
          <div>
            <span>+830</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+80</span>
            <span>fitness program</span>
          </div>
        </div>
        {/* buttons */}
        <div className="h-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
   
      <div className="right-side">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={heartlogo} alt="heartlogo" />
          <span>Heart rate</span>
          <span>108 bpm</span>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
