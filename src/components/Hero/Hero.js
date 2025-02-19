import React from "react";
import IdealabHome from "../../assets/IdealabHome.jpg";

const Hero = () => {
  return (
    <div className="home-banner-container" id="home">
      <div className="home-text-section">
        <h1 className="primary-heading">
          Welcome to MEC IDEALab
        </h1>
        <p className="primary-text">
          AICTE-COGNICOR collaborative space for innovation and learning.
          Fostering creativity and promoting interest in STEM applications.
        </p>
        <button className="secondary-button">
          Explore More
        </button>
      </div>
      <div className="home-image-section">
        <div className="home-bannerImage-container">
          <img src={IdealabHome} alt="IDEALab Home" />
        </div>
      </div>
    </div>
  );
};

export default Hero;