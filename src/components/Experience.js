import React from 'react';
import './Experience.css'; // Import the CSS for styling

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'NIRDPR - National Institute of Rural Development and Panchayati Raj',
      location: 'Hyderabad, India',
      duration: '12/2021 – Present',
      description: [
        'Configured and managed the Kaushal Bharat web application to ensure optimal performance.',
        'Maintaining systems by monitoring and correcting software defects.',
        'Successfully managed and developed a team of onboarding specialists, improving team performance and employee development.',
        'Created and optimized stored procedures and views in MySQL for improved data management.',
        'Developed web applications using Yii2 framework, enhancing application efficiency.',
        'Built and maintained web applications and APIs using Node.js and Lumen.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Defence Research and Development Organisation (DRDO)',
      location: 'Baleshwar, Orissa, India',
      duration: '03/2020 – 11/2021',
      description: [
        'Collaborated with IT teams to implement security controls and configure security tools.',
        'Addressed security-related issues in systems and applications.',
        'Developed real-time object-tracking web applications using Node.js and React.js.',
        'Worked with radar telemetry and thermal sensors for object detection.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'NIIT Limited',
      location: 'Allahabad, Uttar Pradesh, India',
      duration: '08/2018 – 03/2020',
      description: [
        'Managed MySQL databases and created stored procedures for enhanced data management.',
        'Developed the NIIT website using HTML, CSS, JavaScript, and PHP.',
        'Created user interactions and improved usability for the front-end architecture.',
      ],
    },
    {
      title: 'Network Engineer',
      company: 'INDIA GLYCOLS LTD.',
      location: 'Gorakhpur, Uttar Pradesh, India',
      duration: '07/2017 – 07/2018',
      description: [
        'Configured network equipment and maintained the latest firmware releases.',
        'Developed front-end and back-end website architecture.',
        'Implemented firewalls, routing, and switching to maximize efficiency.',
      ],
    },
  ];

  return (
    <div className="experience-page">
      <section className="experience-section" id="experience">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="experience-role">{exp.title}</h4>
                <h5 className="experience-company">
                  {exp.company} <span>▪ {exp.location}</span>
                </h5>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
