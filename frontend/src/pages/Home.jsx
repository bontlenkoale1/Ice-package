/*import React from 'react'*/
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

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
    </>
  );
};

export default Home;
