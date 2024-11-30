/*import React from 'react'*/
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-content">
          <p>© 2024 Cava Le Ice. All rights reserved.</p>
        </div>
        <div className="footer-social-media-wrapper">
          <ul className="footer-social-media">
            <li>
              <a href="#">
                <img src="/Facebook Circled.png" alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/Twitter Circled.png" alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/Instagram (1).png" alt="Instagram Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
