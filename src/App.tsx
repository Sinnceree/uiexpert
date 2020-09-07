import React from "react";
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import AboutUs from "./components/AboutUs";
import OurSuccess from "./components/OurSuccess";
import Testimonials from "./components/Testimonials";
import Phases from "./components/Phases";
import Workflow from "./components/Workflow";
import Blog from "./components/Blog";

import { ReactComponent as FaceitLogo } from "./assets/images/facebook.svg";
import { ReactComponent as TwitterLogo } from "./assets/images/twitter.svg";
import { ReactComponent as GoogleLogo } from "./assets/images/google.svg";
import { ReactComponent as YoutubeLogo } from "./assets/images/youtube.svg";

const App = () => {
  return (
    <div className="homepage">
      <Navigation />
      <Header />
      <ServiceList />
      <AboutUs />
      <OurSuccess />
      <Testimonials />
      <Phases />
      <Workflow />
      <Blog />


      <section className="footer">

        <div className="our-info">
          <div className="logo"><span>Web</span> UiExpert</div>
          <p className="desc">The full-stack design team who focuses<br /> on digital products whatever they are.</p>
          <div className="social-media">
            <div className="item"><FaceitLogo className="icon" /></div>
            <div className="item"><TwitterLogo className="icon" /></div>
            <div className="item"><GoogleLogo className="icon" /></div>
            <div className="item"><YoutubeLogo className="icon" /></div>
          </div>

          <p className="copyright">© 2019 all rights reserved</p>
        </div>


        <div className="link-list">
          <div className="title">About Us</div>
          <div className="link">We're Hiring</div>
          <div className="link">Our Customer</div>
          <div className="link">Blog Post</div>
          <div className="link">Help & Support</div>
        </div>

        <div className="link-list">
          <div className="title">Community</div>
          <div className="link">About Us</div>
          <div className="link">Our Clients</div>
          <div className="link">Legal Notice</div>
        </div>

        <div className="link-list">
          <div className="title">Contact</div>
          <div className="link">+123 456 789 00</div>
        </div>

      </section>

    </div>
  );
}


export default App;
