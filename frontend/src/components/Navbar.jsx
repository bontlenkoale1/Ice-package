import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="container">
      <div className="nav-logo-wrapper">
        <ul className="nav-logo-link">
          <a href="#">
            <img src="/cava logo.png" alt="Cava Logo" className="nav-logo" />
          </a>
        </ul>
      </div>
      <div className={`nav-links-wrapper ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-wrapper">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
