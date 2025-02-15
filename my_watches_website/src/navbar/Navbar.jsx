import React from "react";
import './navbar.css';

const navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-container">
        <i className="ri-vip-crown-fill" id="crown-icon"></i>
        <h1>ROLEX</h1>
      </div>
      <div id="search-bar"></div>
    </nav>
  );
};

export default navbar;
