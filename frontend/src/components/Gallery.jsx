/*import React from 'react';*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/istockphoto-1733624161-612x612 1.png" alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/istockphoto-2169554235-612x612 1.png" alt="Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/istockphoto-184338228-612x612 1.png" alt="Image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/istockphoto-1488937589-612x612 1.png" alt="Image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/istockphoto-1020297078-612x612 1.png" alt="Image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/istockphoto-1869581019-612x612 1.png" alt="Image 6" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
