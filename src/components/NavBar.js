import React, { useState } from 'react';
import './NavBar.css'; // Import the corresponding CSS file for styling

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Me</a>
                    <a href="#key-skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Key Skills</a>
                    <a href="#certifications" className="nav-link" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                    <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#scholastics" className="nav-link" onClick={() => setIsMenuOpen(false)}>Scholastics</a>
                    <a href="#personal" className="nav-link" onClick={() => setIsMenuOpen(false)}>Personal Minutiae</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
