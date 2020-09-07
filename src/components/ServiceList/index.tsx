import React from "react";
import { ReactComponent as UiIcon } from "../../assets/images/ui.svg";
import { ReactComponent as PaintIcon } from "../../assets/images/paint.svg";
import { ReactComponent as PhoneIcon } from "../../assets/images/phone.svg";
import { ReactComponent as RepairIcon } from "../../assets/images/repair.svg";
import { ReactComponent as AppIcon } from "../../assets/images/app.svg";
import { ReactComponent as DomainIcon } from "../../assets/images/domain.svg";

const ServiceList = () => {
  return (
    <section className="services-section wrapper">
      <h1 className="highlight-title">OUR SERVICES</h1>
      <h1 className="title">We Provide Best Quality Service </h1>
      <p className="desc">Our commitment to quality ensures that your applications get the best UI design<br /> possible. UI/UX design is more than just pixels and animations, but the entire application<br /> experience.</p>

      <div className="services-list">
        <div className="row">
          <div className="service-item" style={{ background: "linear-gradient(180deg, #FBBA77 0%, #DFA871 100%)" }}>
            <UiIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>

          <div className="service-item" style={{ background: "linear-gradient(180deg, #41EAE3 0%, #2293B7 100%)" }}>
            <PaintIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>

          <div className="service-item" style={{ background: "linear-gradient(180deg, #69529F 0%, #463864 100%)" }}>
            <PhoneIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>
        </div>
        <div className="row" style={{ marginTop: "1rem" }}>
          <div className="service-item" style={{ background: "linear-gradient(180deg, #4386D2 0%, #0962C5 100%)" }}>
            <AppIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>

          <div className="service-item" style={{ background: "linear-gradient(180deg, #A5A2F6 0%, #564FD6 100%)" }}>
            <DomainIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>

          <div className="service-item" style={{ background: "linear-gradient(180deg, #FF8088 0%, #984141 100%)" }}>
            <RepairIcon className="service-icon" />
            <h1 className="service-title">Website Ui</h1>
            <p className="service-desc">Fast, Powerful & Most Secure Network<br /> Solutions for Smart Home & Businesses</p>
            <button className="service-btn">Read More</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ServiceList;