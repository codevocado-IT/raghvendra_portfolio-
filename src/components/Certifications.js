import React from 'react';
import './Certifications.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const certifications = [
  {
    title: 'CCNA v3.0',
    organization: 'Zoom Tech',
    issueDate: 'June 2017',
    description: 'Comprehensive networking certification covering routing, switching, and network fundamentals.',
  },
  {
    title: 'MCSE (Windows Server 2012)',
    organization: 'Zoom Tech',
    issueDate: 'June 2017',
    description: 'Expert-level certification for managing Windows Server 2012 environments.',
  },
  {
    title: 'Linux Administration',
    organization: 'Zoom Tech',
    issueDate: 'June 2017',
    description: 'Mastered Linux system administration, including shell scripting and server management.',
  },
  {
    title: 'Hardware and Networking',
    organization: 'Zoom Tech',
    issueDate: 'June 2017',
    description: 'Gained hands-on experience in hardware troubleshooting and networking essentials.',
  },
  {
    title: 'C Language',
    organization: 'Naresh IT',
    issueDate: 'June 2017',
    description: 'Learned fundamental programming concepts using the C language.',
  },
  {
    title: 'Advanced Networking with Windows 2008 Server',
    organization: 'HTP Hardware Technology Park',
    issueDate: 'August 2017',
    description: 'Specialized in advanced networking concepts and server management.',
  },
  {
    title: 'Developing Web Applications Using PHP',
    organization: 'NIIT',
    issueDate: 'May 2016',
    description: 'Developed expertise in PHP for building dynamic and data-driven web applications.',
  },
  {
    title: 'Workshop: Data Analysis and Visualization',
    organization: 'NIRD',
    issueDate: 'October 2024',
    description: 'Explored data analysis and visualization techniques using modern tools.',
  },
  {
    title: 'Overview of Web GIS Technology',
    organization: 'ISRO',
    issueDate: 'July 2021',
    description: 'Learned about Web GIS technologies and their applications.',
  },
  {
    title: 'Overview of Geoprocessing Using Python',
    organization: 'ISRO',
    issueDate: 'January 2022',
    description: 'Gained hands-on experience in geoprocessing workflows using Python.',
  },
  {
    title: 'Remote Sensing & GIS Technology',
    organization: 'ISRO',
    issueDate: 'July 2020',
    description: 'Learned remote sensing and GIS applications for government and academic purposes.',
  },
  {
    title: 'AWS',
    organization: 'NIELIT',
    issueDate: 'October 2024',
    description: 'Developed expertise in Amazon Web Services cloud solutions.',
  },
  {
    title: 'Kafka and Zookeeper',
    organization: 'Scaler',
    issueDate: 'December 2024',
    description: 'Mastered message queueing and distributed system management.',
  },
  {
    title: 'Workshop: Copilot',
    organization: 'Skill Nation',
    issueDate: 'October 2024',
    description: 'Explored the practical use of GitHub Copilot for efficient coding.',
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
