import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Get In Touch</h1>
      <div className="contact-form-container">
        <input type="email" placeholder="yourmail@email.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;