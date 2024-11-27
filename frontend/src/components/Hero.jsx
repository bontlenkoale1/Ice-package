/*import React from 'react'*/
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
/*import 'swiper/css/pagination'; // Optional (if using pagination)*/
import "swiper/css/navigation"; // Optional (if using navigation)

// Import Swiper modules
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="/istockphoto-1151225498-612x612 1 (1).png"
              alt="Slide 1"
              className="hero-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/fruity.jpg" alt="Slide 2" className="hero-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/istockphoto-1163001567-612x612.jpg"
              alt="Slide 3"
              className="hero-images"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
