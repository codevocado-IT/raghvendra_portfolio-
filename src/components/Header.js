import React, { useState, useEffect } from 'react';
import './Header.css'; // Add a separate CSS file for styling
import img from './img/pixelcut-export.jpeg';

const Header = () => {
  const startDate = new Date('2017-07-20');
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const calculateExperience = () => {
      const now = new Date();
      const diff = now - startDate;

      // Convert milliseconds into years, months, days, hours, minutes, seconds
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setExperience({ years, months, days, hours, minutes, seconds });
    };

    calculateExperience();
    const interval = setInterval(calculateExperience, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [startDate]);

  return (
    <header className="header-container">
      <div className="profile-section">
        <img src={img} alt="Profile" className="profile-image" />
        <div className="text-content">
          <h1 className="name">Raghvendra Upadhayay</h1>
          <p className="tagline">
            Tech Lead | Speaker | Team Management | AWS & Cybersecurity Expert | Ex-DRDO | Full Stack Software Engineer | Creating Elegant Solutions for Complex Problems | Passionate About Clean Code & Continuous Learning
          </p>
        </div>
      </div>
      <div className="experience-container">
        <div className="experience-info">
          <h3>Experience in IT Industry:</h3>
          <p>
            {experience.years} years, {experience.months} months, {experience.days} days, {experience.hours} hours, {experience.minutes} minutes, {experience.seconds} seconds
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
