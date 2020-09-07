import React from "react";

const OurSuccess = () => {
  return (
    <section className="our-success">
      <h1 className="title">Our Success</h1>
      <p className="desc">View our portfolio in catagoris</p>

      <div className="success-list wrapper">

        <div className="box">
          <div className="inner-box" style={{ background: "linear-gradient(160deg, #af94fd 0%, #6651f3 100%)", boxShadow: "#af94fd 1px 2px 9px" }}>137</div>
          <h1 className="title">PROJECTS DONE</h1>
        </div>

        <div className="box">
          <div className="inner-box" style={{ background: "linear-gradient(160deg, #FF95A5 0%, #FF62A3 100%)", boxShadow: "#FF95A5 1px 2px 9px" }}>47</div>
          <h1 className="title">HAPPY CLIENTS</h1>
        </div>

        <div className="box">
          <div className="inner-box" style={{ background: "linear-gradient(160deg, #FBC9A4 0%, #FF884A 100%)", boxShadow: "#FBC9A4 1px 2px 9px" }}>34</div>
          <h1 className="title">RETURN CLIENTS</h1>
        </div>

      </div>
    </section>
  )
}

export default OurSuccess;