import React from "react";
import { plansData } from "../../../data/plansData";
import "./Plans.css";
import whitetick from "../../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur1 "></div>
      <div className="blur plans-blur2 "></div>
      <div className="program-header">
        <span className="outline-text">Ready to start </span>
        <span>your journey</span>
        <span className="outline-text">now with us</span>
      </div>

      <div className="plans-data">
        {plansData.map((section, i) => (
          <div className="plans-categories" key={i}>
            {section.icon}
            <span>{section.name}</span>
            <span>$ {section.price}</span>
            <div className="features">
              {section.features.map((feature, i) => (
                <div className="feature-section">
                  <img src={whitetick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
