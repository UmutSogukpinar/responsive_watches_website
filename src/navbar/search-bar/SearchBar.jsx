import React, { useState } from "react";
import  SideBar from "../side-bar/SideBar";
import "./search-bar.css";

const SearchBar = () => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!isClicked);
  };
  console.log(isClicked);
  
  return (
    <div id="search-bar">
      <SideBar isClicked={isClicked} />
      {isClicked ? (
        <a href="#" id="search-icon" onClick={handleClick}>
          <i className="ri-close-line" id="menu-icon"></i>
        </a>
      ) : (
        <div id="search-container">
          <a href="#" id="search-icon" onClick={handleClick}>
            <i className="ri-menu-line" id="menu-icon"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
