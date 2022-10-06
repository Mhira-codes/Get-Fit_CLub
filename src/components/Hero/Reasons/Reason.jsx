import React from "react";
import "./Reason.css";
import Img1 from "../../../assets/image1.png";
import Img2 from "../../../assets/image2.png";
import Img3 from "../../../assets/image3.png";
import Img4 from "../../../assets/image4.png";
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
        fgc vln
      </div>
    </div>
  );
};

export default Reason;
