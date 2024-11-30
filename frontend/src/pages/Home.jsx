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
      <section className="hero-section">
        <Hero />
      </section>
      <section className="about-section">
        <About />
      </section>
      <section className="services-section">
        <Services />
      </section>
      <section className="gallery-section">
        <Gallery />
      </section>
      <section className="worked-with-section">
        <WorkedWith />
      </section>
      <section className="contact-us-section">
        <ContactUs />
      </section>
      <section className="locate-us-section">
        <LocateUs />
      </section>
    </>
  );
};

export default Home;
