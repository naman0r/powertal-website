import React from "react";
import "./App";
const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="nav-logo">
        <img
          src="../public/powertal-logo.svg"
          alt="Company Logo"
          className="logo"
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#our-approach">Our Approach</a>
        </li>
        <li>
          <a href="#our-services">Our Services</a>
        </li>
        <li>
          <a href="#our-team">Our Team</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
