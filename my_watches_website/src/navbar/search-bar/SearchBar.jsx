import React, { useState } from "react";
import "./search-bar.css";

const SearchBar = () => {
  const [isClicked, setClicked] = useState(false);

  if (isClicked) {
    return <div id="search-bar">SearchBar</div>;
  } else {
    return <div id="search-bar">SearchBar</div>;
  }
};

export default SearchBar;
