import React from 'react';
import './Certifications.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const certifications = [
  {
    title: 'Full Stack Web Development',
    organization: 'Coursera',
    issueDate: 'March 2023',
    description: 'Learned full-stack development using React, Node.js, and MongoDB.',
  },
  {
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    issueDate: 'January 2023',
    description: 'Gained expertise in AWS cloud architecture and deployment.',
  },
  {
    title: 'Data Science Professional',
    organization: 'IBM',
    issueDate: 'July 2022',
    description: 'Covered machine learning, data analysis, and visualization techniques.',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    organization: 'EC-Council',
    issueDate: 'May 2021',
    description: 'Specialized in penetration testing and ethical hacking methodologies.',
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h3 className="certifications-title">Certifications</h3>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">
              <FontAwesomeIcon icon={faCertificate} size="3x" />
            </div>
            <div className="cert-info">
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-organization">{cert.organization}</p>
              <p className="cert-date">Issued: {cert.issueDate}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
