import React from "react";
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div className="homepage">
      <Navigation />
      <Header />
      <ServiceList />
      <AboutUs />
    </div>
  );
}

export default App;
