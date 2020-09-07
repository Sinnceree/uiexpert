import React from "react";
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import AboutUs from "./components/AboutUs";
import OurSuccess from "./components/OurSuccess";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="homepage">
      <Navigation />
      <Header />
      <ServiceList />
      <AboutUs />
      <OurSuccess />
      <Testimonials />
    </div>
  );
}

export default App;
