import React from 'react';
import './Scholastics.css';
import { FaGraduationCap } from 'react-icons/fa'; // Import icon for degree

const Scholastics = () => {
    return (
        <section className="scholastics-section" id="scholastics">
            <h3 className="section-title">My Scholastics Journey</h3>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="timeline-content">
                        <h4 className="degree-title">M.Tech (Computer Science)</h4>
                        <p className="institution">XYZ University, 2023</p>
                        <p className="details">
                            Specialization in Artificial Intelligence. Developed a research paper on Machine Learning Algorithms for Data Prediction.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="timeline-content">
                        <h4 className="degree-title">B.Tech IT</h4>
                        <p className="institution">ABC College of Engineering, 2020</p>
                        <p className="details">
                            Graduated with Honors in Information Technology. Developed a final-year project on Real-Time Web Applications.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="timeline-content">
                        <h4 className="degree-title">12th (Science)</h4>
                        <p className="institution">PQR School, 2016</p>
                        <p className="details">
                            Specialization in Physics, Chemistry, and Mathematics. Achieved top marks in Physics and Mathematics.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="timeline-content">
                        <h4 className="degree-title">10th</h4>
                        <p className="institution">XYZ Public School, 2014</p>
                        <p className="details">
                            Graduated with Distinction. Actively participated in co-curricular activities, including science exhibitions and debates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Scholastics;
