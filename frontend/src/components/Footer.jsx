import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <p className="footer-text">&copy; 2024 Cava Le Ice. All rights reserved.</p>
        <nav aria-label="Social Media Links" className="footer-social-media-wrapper">
          <ul className="footer-social-media">
            <li>
              <a href="#" aria-label="Facebook">
                <img src="/Facebook Circled.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <img src="/Twitter Circled.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <img src="/Instagram (1).png" alt="Instagram" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
