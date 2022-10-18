import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../../data/testimonialsData";
import leftArrow from "../../../assets/leftArrow.png";
import rightArrow from "../../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [getData, setgetData] = useState(0);
  const getlength = testimonialsData.length;
  const transition = { type: "spring", duration: "3" };
  return (
    <div className="testimonials">
      <div className="left-testimonial">
        <span>Testimonial</span>
        <span className="outline-text">What they </span>
        <span>say about us</span>
        <motion.span
         key={getData}
         initial={{opacity:0, x:100}}
         whileInView={{opacity:1, x:0}}
         transition={transition}
         exit={{opacity:0 , x:100}}
        >{testimonialsData[getData].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {" "}
            {testimonialsData[getData].name}{" "}
          </span>{" "}
          - {testimonialsData[getData].status}
        </span>
      </div>
      <div className="right-testimonial">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: "2" }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: "2" }}
        ></motion.div>
        <motion.img
        key={getData}
         initial={{opacity:0, x:100}}
         whileInView={{opacity:1, x:0}}
         transition={transition}
         exit={{opacity:0 , x:-100}}
         src={testimonialsData[getData].image} alt="" />

        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() =>
              getData === 0
                ? setgetData(getlength - 1)
                : setgetData((prev) => prev - 1)
            }
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() =>
              getData === getlength - 1
                ? setgetData(0)
                : setgetData((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
