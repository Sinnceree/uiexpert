import React from "react";
import AboutUsImage from "../../assets/images/about.svg";
import PlayBtnImage from "../../assets/images/play.svg";

const AboutUs = () => {
  return (
    <section className="aboutus wrapper">
      <div className="left">
        <img src={AboutUsImage} className="aboutus-ill" alt="aboutus-img" />
      </div>
      <div className="right">
        <h1 className="title">Know About UiExpert</h1>
        <p className="desc">I always follow professional Workflow and provide you best<br /> service with resealable costs.</p>

        <div className="play-section">
          <button className="circle-blue-btn">
            <img src={PlayBtnImage} className="play-ill" alt="play-img" />
          </button>
          <div className="splitter" />
          <p className="desc">See My video Brif</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;