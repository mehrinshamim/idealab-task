import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>IDEALab</h1>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Events</span>
          <span>Contact</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 123456789</span>
          <span>idealab@mec.ac.in</span>
          <span>Model Engineering College</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;