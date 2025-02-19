import React from "react";

const Events = () => {
  return (
    <div className="work-section-wrapper" id="events">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Events</h1>
        <p className="primary-text">
          Discover our range of interactive workshops, training programs, 
          and innovation projects.
        </p>
      </div>
      <div className="work-section-bottom">
        {[
          {
            title: "Workshops",
            description: "Interactive learning sessions on cutting-edge technologies"
          },
          {
            title: "Training",
            description: "Hands-on experience with industry-relevant tools"
          },
          {
            title: "Projects",
            description: "Turn your innovative ideas into working prototypes"
          }
        ].map((item) => (
          <div key={item.title} className="work-section-info">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;