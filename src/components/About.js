import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './About.css'; // Ensure you create a corresponding CSS file for styling

const About = () => {
    const startDate = new Date('2017-07-20');
    const [experience, setExperience] = useState({});
    useEffect(() => {
    const now = new Date();
    const diff = now - startDate;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    setExperience({ years });
}, [startDate]);

    return (
        <section className="about" id="about">
            <div className="about-header">
                <h2>About Me</h2>
                <p className="subheading">A brief journey into my professional life</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <FontAwesomeIcon icon={faUser} className="about-icon" />
                    <h3>Who I Am</h3>
                    <p>
                        Experienced Senior Software Engineer with a passion for crafting elegant solutions to complex technical challenges. With {experience.years}+ years in the industry, I’ve honed my skills in full-stack development, software architecture, and technical leadership.
                    </p>
                </div>

                <div className="about-section">
                    <FontAwesomeIcon icon={faCode} className="about-icon" />
                    <h3>What I Do</h3>
                    <p>
                        Throughout my career, I’ve contributed to diverse projects and industries, designing and implementing robust, scalable systems that drive innovation and enhance user experiences. My technical proficiency spans PHP, Node.js, MySQL, Python, Yii2, and Django.
                    </p>
                </div>

                <div className="about-section">
                    <FontAwesomeIcon icon={faUsers} className="about-icon" />
                    <h3>My Leadership</h3>
                    <p>
                        I am dedicated to fostering a culture of excellence within development teams. I’m passionate about mentoring junior engineers, nurturing their growth, and creating a collaborative environment where ideas flourish.
                    </p>
                </div>

                <div className="about-section">
                    <FontAwesomeIcon icon={faLightbulb} className="about-icon" />
                    <h3>My Passion</h3>
                    <p>
                        I thrive on dissecting complex problems, architecting solutions that blend technical precision with user-centric design, and delivering results that exceed expectations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
