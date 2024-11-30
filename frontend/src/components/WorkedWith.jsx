/*import React from 'react'*/
import "./WorkedWith.css";
import Instagram from "/Instagram.png";
import Tiktok from "/2504942 3.png";

const WorkedWith = () => {
  return (
    <div className="container">
      <div className="worked-with-wrapper">
        <h2>Establishments We Have Worked With</h2>
      </div>
      <div className="worked-with-logos-wrapper">
        <div className="establishment">
          <img src="/IMG-20241119-WA0004.png" alt="14 Avenue Logo" />
        </div>
        <div className="social-links">
          <img src={Instagram} alt="" className="social-logo" />
          <a href="https://www.instagram.com/1431avenue/" target="_blank">
            Instagram
          </a>
          <img src={Tiktok} alt="" className="social-logo" />
          <a href="https://www.tiktok.com/@14thirty1_avenue" target="_blank">
            TikTok
          </a>
        </div>
        <div className="establishment">
          <img src="/hurricane-logo.png" alt="hurricane" />
        </div>
        <div className="social-links">
          <img src={Instagram} alt="" className="social-logo" />
          <a href="https://www.instagram.com/hurricaneslifestyle/?hl=en" target="_blank">
            Instagram
          </a>
          <img src={Tiktok} alt="" className="social-logo" />
          <a href="https://www.tiktok.com/@hurricanelifestyle?_t=8kOopGbHoRh&_r=1" target="_blank">
            TikTok
          </a>
        </div>
        <div className="establishment">
          <img src="/eskhaleni.jpg" alt="eskhaleni" />
        </div>
        <div className="social-links">
          <img src={Instagram} alt="" className="social-logo" />
          <a href="https://www.instagram.com/eskhalenishisanyama/?hl=en" target="_blank">
            Instagram
          </a>
        </div>

      </div>
    </div>
  );
};

export default WorkedWith;
