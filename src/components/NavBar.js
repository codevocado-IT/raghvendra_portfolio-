import React from 'react';
import './NavBar.css'; // Import the corresponding CSS file for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#about" className="nav-link">About Me</a>
                <a href="#key-skills" className="nav-link">Key Skills</a>
                <a href="#certifications" className="nav-link">Certifications</a>
                {/* <a href="#skills" className="nav-link">Skills</a> */}
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#scholastics" className="nav-link">Scholastics</a>
                <a href="#personal" className="nav-link">Personal Minutiae</a>
            </div>
        </nav>
    );
};

export default NavBar;
