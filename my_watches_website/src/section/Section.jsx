import React, { useEffect, useState } from "react";
import "./section.css";
import left_watch from "../../public/image/pic2.png";

const Section = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="section">
      <div id="left">
        <h3>Watches collection 2024</h3>
        <h2>Customer Watches For Any Occasion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo
          totam minima est perspiciatis magni repellendus nihil eum qui? Unde
          blanditiis harum quae asperiores doloribus atque debitis laudantium
          totam voluptatibus?
        </p>
        <a href="">Explore More</a>
      </div>
      <div id="right">
        <div id="right-sub-one" >
          <img src={left_watch} alt="Watch" className={isLoaded ? "fade-in" : "fade-out"}/>
        </div>
        <div id="right-sub-two"></div>
      </div>
    </div>
  );
};

export default Section;
