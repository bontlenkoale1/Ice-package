/*import React from 'react'*/
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="about-wrapper">
        <div className="about-us-wrapper">
          <h2>About Us</h2>
        </div>
        <div className="about-us-content-wrapper">
          <div className="about-us-content">
            <p>
              Cava Le Ice has been serving premium quality ice packages for over
              a decade.
              <br /> Our mission is to provide crystal-clear ice for various
              industries, from restaurants and hotels to events and special
              occasions.
              <br /> We take pride in delivering perfectly frozen products that
              enhance your beverages and
              <br /> elevate the experience for your guests.
              <br /> Our state-of-the-art ice manufacturing process ensures the
              highest standards of hygiene and quality.
              <br /> With a focus on sustainability, we are committed to
              reducing our environmental footprint
              <br /> by adopting eco-friendly practices in production and
              delivery. At Cava Le Ice, we don’t just provide ice — we provide
              an essential service that keeps your drinks cool and your
              customers refreshed.
              <br /> Established right eKasi, we are proud of our roots and the
              community we serve,
              <br /> ensuring that our ice solutions are accessible and reliable
              for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="about-banner-wrapper">
        <div className="banner">
          <img src="/banner.png" alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
