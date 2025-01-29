/*import React from 'react';*/
import "./LocateUs.css";

const LocateUs = () => {
  return (
    <div className="container">
      <div className="map-h2-wrapper">
        <h2>Locate Us <img src="/location-ping.png" /></h2>
      </div>
      <div className="google-maps-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.9593679751133!2d28.15877507411005!3d-26.327815169017352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951b9fad745d5d%3A0x9cd1437b1cd2f3a6!2s115%20Phoofolo%20St%2C%20Motsamai%2C%20Katlehong%2C%201431!5e0!3m2!1sen!2sza!4v1732996480353!5m2!1sen!2sza" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocateUs;
