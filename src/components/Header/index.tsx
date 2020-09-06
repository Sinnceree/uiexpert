import React from "react";
import { ReactComponent as Illustration } from "../../assets/images/illustration.svg";
import { ReactComponent as WaveHand } from "../../assets/images/waving-hand.svg";

const Header = () => {
  return (
    <div className="header wrapper">
      <div className="left">
        <div className="welcome-text">
          <h1 className="title">Provide You The <br /> Best Ui Service.</h1>
          <p className="desc">Mobile App Design and Development Studio. You can hire us</p>
        </div>
        <button className="blue-btn"><WaveHand className="wave-icon" /> Wave Me</button>
      </div>

      <div className="right">
        <Illustration className="header-illustration" />
      </div>
    </div>
  )
}

export default Header;