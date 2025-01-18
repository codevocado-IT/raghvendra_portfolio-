import React from 'react';
import './Experience.css'; // Import the CSS for styling

const Experience = () => {
  const experiences = [
    {
      title: 'Senior PHP Developer',
      company: 'NIRDPR - National Institute of Rural Development and Panchayati Raj',
      location: 'Hyderabad, India',
      duration: '12/2021 – Present',
      description: [
        'Configured and managed the Kaushal Bharat web application to ensure optimal performance.',
        'Maintaining systems by monitoring and correcting software defects.',
        'Successfully managed and developed a team of onboarding specialists, improving team performance and employee development.',
        'Created and optimized stored procedures and views in MySQL for improved data management.',
        'Managed MySQL databases, ensuring data integrity and performance.',
        'Maintained systems by monitoring and resolving software defects to ensure smooth operation.',
        'Developed efficient, testable, and reusable PHP modules, solving complex performance and architectural challenges.',
        'Integrated user-facing elements with backend services to enhance user experience.',
        'Designed and implemented RESTful services and APIs following the latest software design techniques.',
        'Utilized Git for version control to manage code changes effectively.',
        'Conducted technical training sessions to enhance new employees\' skills.',
        'Led onboarding specialists, providing support and performance feedback for high-quality onboarding.',
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
        'Designed and developed RESTful services and APIs.',
        'Developed real-time object-tracking web applications using Node.js and React.js.',
        'Designed and implemented maps for real-time applications.',
        'Worked with radar telemetry and thermal sensors for object detection.',
        'Developed real-time object detection systems using Python.',
        'Gained experience with missile systems and related technologies.',
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
        'Built servers and databases to support website functionality.',
        'Met both technical and consumer needs by balancing functionality and user experience.',
        'Stayed updated with web application developments and programming languages.',
        'Used object-oriented PHP for robust software development.',
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
        'Procured network equipment and managed subcontractors.',
        'Implemented firewalls, routing, and switching to maximize efficiency.',
        'Ensured HTML, CSS, and JavaScript were valid and consistent across applications.',
        'Taught HTML, CSS, JavaScript, PHP, MySQL, and Node.js to students.',
        'Developed the IGL website for an enhanced user experience.',
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h3 className="experience-title">Work Experience</h3>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4 className="experience-title">{exp.title}</h4>
              <h5 className="company-name">
                {exp.company} ▪ {exp.location}
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
  );
};

export default Experience;
