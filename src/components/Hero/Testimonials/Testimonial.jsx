import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../../data/testimonialsData";
import leftArrow from "../../../assets/leftArrow.png"
import rightArrow from "../../../assets/rightArrow.png"
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
        <div></div>
        <div></div>
        <img src={testimonialsData[getData].image} alt="" />

        <div className="arrows">
       <img src={leftArrow} alt="" 
       onClick={()=>(
        getData===0?setgetData(getlength-1):setgetData((prev)=>prev-1)
       )}

       />
       <img src={rightArrow} alt="" 
       onClick={()=>(
        getData===getlength-1?setgetData(0):setgetData((prev)=>prev+1)
       )}
       />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
