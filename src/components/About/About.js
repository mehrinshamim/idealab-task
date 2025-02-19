import React from "react";
import IdealabHome from "../../assets/IdealabHome.jpg";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          About MEC IDEALab
        </h1>
        <p className="primary-text">
          Established in 2022, MEC IDEALab is a collaborative initiative between AICTE 
          and COGNICOR. We provide interactive learning workshops and training programmes 
          to foster creativity and promote interest in STEM applications.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
      <div className="about-section-image-container">
        <img src={IdealabHome} alt="IDEALab Workspace" className="about-image" />
      </div>
    </div>
  );
};

export default About;