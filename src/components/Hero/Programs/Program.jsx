import React from "react";
import "./Program.css";
import { programsData } from "../../../data/programsData";
import Arrow from "../../../assets/rightArrow.png"
const Program = () => {
  return (
    <div className="programs" id="program">
      {/* progrma header */}
      <div className="program-header">
        <span className="outline-text">Explore our </span>
        <span>programs</span>
        <span className="outline-text">to shape you</span>
      </div>

      {/* progrma-data */}
      <div className="program-data">
        {programsData.map((data,i) => (
          <div className="program-list" key={i}>
            {data.image}
            <span>{data.heading}
            </span>
            <span>{data.details}</span>
          <div className="join-now">
            <span>Join Now</span>
            <img src={Arrow} alt="" />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
