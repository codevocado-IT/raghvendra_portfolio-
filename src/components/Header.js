import React from 'react';
import './Header.css'; // Add a separate CSS file for styling
import img from './img/pixelcut-export.jpeg';

const Header = () => {
    return (
        <header className="header-container">
            <div className="profile-section">
                <img
                    src={img}
                    alt="Profile"
                    className="profile-image"
                />
                <div className="text-content">
                    <h1 className="name">Raghvendra Upadhayay</h1>
                    <p className="tagline">
                        Tech Lead | Speaker | Team Management | AWS & Cybersecurity Expert | Ex-DRDO | Full Stack Software Engineer | Creating Elegant Solutions for Complex Problems | Passionate About Clean Code & Continuous Learning
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
