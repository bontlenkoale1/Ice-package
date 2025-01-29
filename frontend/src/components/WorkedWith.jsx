import React from "react";
import PropTypes from "prop-types"; 
import "./WorkedWith.css";
import InstagramIcon from "/Instagram.png";
import TiktokIcon from "/2504942 3.png";

const establishments = [
  {
    name: "Food Af",
    logo: "/foodAf.jpg",
    instagram: "https://www.instagram.com/food_af_k1/",
    tiktok: "https://www.tiktok.com/@food_af",
  },
  {
    name: "14 Avenue",
    logo: "/IMG-20241119-WA0004.png",
    instagram: "https://www.instagram.com/1431avenue/",
    tiktok: "https://www.tiktok.com/@14thirty1_avenue",
  },
  {
    name: "Hurricane",
    logo: "/hurricane-logo.png",
    instagram: "https://www.instagram.com/hurricaneslifestyle/?hl=en",
    tiktok: "https://www.tiktok.com/@hurricanelifestyle?_t=8kOopGbHoRh&_r=1",
  },
  {
    name: "Eskhaleni",
    logo: "/eskhaleni.jpg",
    instagram: "https://www.instagram.com/eskhalenishisanyama/?hl=en",
  },
];

const SocialLinks = ({ instagram, tiktok }) => (
  <div className="social-links">
    {instagram && (
      <>
        <img src={InstagramIcon} alt="Instagram" className="social-logo" />
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </>
    )}
    {tiktok && (
      <>
        <img src={TiktokIcon} alt="TikTok" className="social-logo" />
        <a href={tiktok} target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
      </>
    )}
  </div>
);


SocialLinks.propTypes = {
  instagram: PropTypes.string,
  tiktok: PropTypes.string,
};

const WorkedWith = () => {
  return (
    <div className="container">
      <div className="worked-with-wrapper">
        <h2>Establishments We Have Worked With</h2>
      </div>
      <div className="worked-with-logos-wrapper">
        {establishments.map((establishment, index) => (
          <div key={index} className="establishment-container">
            <div className="establishment">
              <img src={establishment.logo} alt={establishment.name} />
            </div>
            <SocialLinks
              instagram={establishment.instagram}
              tiktok={establishment.tiktok}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkedWith;
