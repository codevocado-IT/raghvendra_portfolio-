import React from 'react';
import './Projects.css'; // Import the CSS for styling
import img from './img/projects icon.png';

const Projects = () => {
  // Example project data (you can replace these with real data)
  const projects = [
    {
      title: 'Real-Time Tracking System',
      description: 'Developed a real-time tracking system associated with Defence Research and Development Organisation (DRDO) for tracking assets and personnel in real-time.',
      techStack: 'React.js, NoSQL, Web Application Development, OOP',
      image: '',
      link: '#',
    },
    {
      title: 'Account Aggregator',
      description: 'Worked on an Account Aggregator system for NIRDPR, which checks and aggregates bank statements for users.',
      techStack: 'PHP, API Development, REST APIs, Data Analysis, AWS, Jenkins, CI/CD',
      image: '',
      link: '#',
    },
    // {
    //   title: 'SamvAAd 2023',
    //   description: 'Developed SamvAAd, an effective tool for government welfare schemes, reviewed by JS Sir.',
    //   techStack: 'Web Application Development, PHP, MySQL, OOP',
    //   image: ' ',
    //   link: '#',
    // },
    {
      title: 'Helpdesk System',
      description: 'Created a role-based ticketing system for DRDO to manage support queries effectively.',
      techStack: 'PHP, API Development, MySQL, Web Application Development, Jenkins, CI/CD',
      image: '',
      link: '#',
    },
    {
      title: 'eMFr (Electronic Medical Form)',
      description: 'Developed an eMFr for DRDO, used to handle medical forms electronically.',
      techStack: 'AWS, Web Application Development, CI/CD, Jenkins',
      image: '',
      link: '#',
    },
    {
      title: 'Object Detection System',
      description: 'Worked on a system for detecting objects, used for enhancing security systems.',
      techStack: 'NoSQL, CI/CD',
      image: '',
      link: '#',
    },
    {
      title: 'Map Server',
      description: 'Developed a map server for DRDO to display and interact with geographical data.',
      techStack: 'NoSQL, CI/CD, Web Application Development',
      image: '',
      link: '#',
    },
    {
      title: 'Courier Services System',
      description: 'Developed a courier services system for NIIT Limited to manage deliveries and track orders.',
      techStack: 'CI/CD, Web Application Development',
      image: '',
      link: '#',
    },
    {
      title: 'SMS Alert System',
      description: 'Created an SMS alert system for Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya to notify students and teachers about exam schedules.',
      techStack: 'Web Application Development, OOP',
      image: '',
      link: '#',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h3 className="projects-title">My Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image ? project.image : img}alt={project.title} className="project-image" />
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">Tech: {project.techStack}</p>
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
