import React from "react";
import "./Reason.css";
import Img1 from "../../../assets/image1.png";
import Img2 from "../../../assets/image2.png";
import Img3 from "../../../assets/image3.png";
import Img4 from "../../../assets/image4.png";
import tick from "../../../assets/tick.png";
import nb from "../../../assets/nb.png";
import adidas from "../../../assets/adidas.png";
import nike from "../../../assets/nike.png";
const Reason = () => {
  return (
    <div className="reasons">
      <div className="left-reason">
        <img src={Img1} alt="image1" />
        <img src={Img2} alt="image2" />
        <img src={Img3} alt="image3" />
        <img src={Img4} alt=" image4" />
      </div>
      <div className="right-reason">
        <span>Some Reasons</span>
        <div>
          <span className="outline-text">Why</span>
          <span> choose us?</span>
        </div>
        <div className="reason-details">
          <div>
            <img src={tick} alt="" />
            <span>OVER +138 COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN FASTER AND SMATER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR A NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas}alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
