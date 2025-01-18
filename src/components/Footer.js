import React from 'react';
import './Footer.css'; // Add this file for styling
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:raghvandr@hotmail.com" className="footer-link">raghvandr@hotmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="footer-icon" />
            <span className="footer-text">+91-0556167890</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="footer-icon" />
            <a href="https://www.linkedin.com/in/raghvendra-upadhyay-08500710b/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Raghvendra Upadhayay | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
