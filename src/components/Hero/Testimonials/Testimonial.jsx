import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../../data/testimonialsData";

const Testimonial = () => {
  const [getData, setgetData] = useState(0);
  const getlength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-testimonial">
        <span>Testimonial</span>
        <span className="outline-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[getData].review}</span>
        <span>
          <span style={{color: "var(--orange)"}}> {testimonialsData[getData].name} </span> -{" "}
          {testimonialsData[getData].status}
        </span>
      </div>
      <div className="right-testimonial">
        <img src={testimonialsData[getData].image} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
