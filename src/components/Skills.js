import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faTasks,
  faCode,
  faChartLine,
  faUsers,
  faLightbulb,
  faCodeBranch,
  faCloud,
  faNetworkWired,
  faSyncAlt,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';

import { faLaravel, faPython } from '@fortawesome/free-brands-svg-icons';
import './Skills.css'; // Import the CSS for styling

const Skills = () => {
  const skills = [
    { icon: faServer, title: 'Linux Server' },
    { icon: faTasks, title: 'JIRA' },
    { icon: faCode, title: 'Web Development' },
    { icon: faPython, title: 'Python' },
    { icon: faChartLine, title: 'Power BI' },
    { icon: faUsers, title: 'Team Management' },
    { icon: faLightbulb, title: 'Technical Leadership' },
    { icon: faLaravel, title: 'Laravel PHP' },
    { icon: faCodeBranch, title: 'GIT' },
    { icon: faCloud, title: 'AWS Lambda' },
    { icon: faNetworkWired, title: 'MVC' },
    { icon: faSyncAlt, title: 'Ajax' },
    { icon: faPlug, title: 'API' },
  ];

  return (
    <section className="skills-section" id="key-skills">
      <h3 className="skills-title">Key Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <FontAwesomeIcon icon={skill.icon} size="3x" className="skill-icon" />
            <h4 className="skill-title">{skill.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
