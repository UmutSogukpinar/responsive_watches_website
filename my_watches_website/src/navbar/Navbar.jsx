import React from "react";
import "./navbar.css";
import "./search-bar/SearchBar";
import SearchBar from "./search-bar/SearchBar";

const navbar = () => {
  return (
    <nav id="navbar">
      <div id="navbar-container">
        <i className="ri-vip-crown-fill" id="crown-icon"></i>
        <h1>ROLEX</h1>
      </div>
      <SearchBar />
    </nav>
  );
};

export default navbar;
