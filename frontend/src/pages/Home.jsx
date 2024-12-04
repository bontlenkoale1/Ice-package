/*import React from 'react'*/
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import  WorkedWith  from "../components/WorkedWith";
import ContactUs from "../components/ContactUs";
import LocateUs from "../components/LocateUs";


const Home = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <Hero />
      </section>
      <section id="about" className="about-section">
        <About />
      </section>
      <section id="services" className="services-section">
        <Services />
      </section>
      <section id="gallery" className="gallery-section">
        <Gallery />
      </section>
      <section id="worked-with" className="worked-with-section">
        <WorkedWith />
      </section>
      <section id="contact-us" className="contact-us-section">
        <ContactUs />
      </section>
      <section id="locate-us" className="locate-us-section">
        <LocateUs />
      </section>
    </>
  );
};

export default Home;
