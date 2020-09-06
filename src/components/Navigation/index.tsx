import React from "react";
import { ReactComponent as NavWaves } from "../../assets/images/nav-wave.svg";

const Navigation = () => {
  return (
    <div className="navigation wrapper">
      <div className="logo"><span>Web</span> UiExpert</div>

      <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Contact</li>
        <button className="orange-btn">LOG IN</button>
      </ul>

      <NavWaves className="nav-waves" />
    </div>
  )
}

export default Navigation;