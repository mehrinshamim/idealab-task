import React from "react";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          MEC IDEALab
        </h1>
        <p className="primary-text">
          Established in 2022, MEC IDEALab is a collaborative initiative between AICTE 
          and COGNICOR. We provide interactive learning workshops and training programmes 
          to foster creativity and promote interest in STEM applications.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">Watch Video</button>
        </div>
      </div>
      <div className="about-section-image-container">
        {/* Add your about section image here */}
      </div>
    </div>
  );
};

export default About;