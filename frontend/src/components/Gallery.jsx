import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "/istockphoto-1733624161-612x612 1.png",
    "/istockphoto-2169554235-612x612 1.png",
    "/istockphoto-184338228-612x612 1.png",
    "/istockphoto-1488937589-612x612 1.png",
    "/istockphoto-1020297078-612x612 1.png",
    "/istockphoto-1869581019-612x612 1.png"
  ];

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
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img 
                src={src} 
                alt={`Image ${index + 1}`} 
                loading="lazy" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
