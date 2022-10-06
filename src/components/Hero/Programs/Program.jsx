import React from "react";
import "./Program.css";
import { programsData } from "../../../data/programsData";
import Arrow from "../../assets"
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
        {programsData.map((data) => (
          <div className="program-data">
            {data.image}
            <span>{data.heading}
            <img src={Arrow} alt="" />
            </span>
            <span>{data.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
