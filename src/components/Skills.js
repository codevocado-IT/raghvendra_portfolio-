// src/components/Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faTasks, faCode, faPython, faChartLine, faUsers, faLightbulb, faLaravel, faCodeBranch, faCloud, faNetworkWired, faSyncAlt, faPlug } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <section className="section" id="key-skills">
            <h3>Key Skills</h3>
            <div className="key-skills">
                <div>
                    <FontAwesomeIcon icon={faServer} size="2x" />
                    <h4>Linux Server</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTasks} size="2x" />
                    <h4>JIRA</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} size="2x" />
                    <h4>Web Development</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPython} size="2x" />
                    <h4>Python</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                    <h4>Power BI</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUsers} size="2x" />
                    <h4>Team Management</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLightbulb} size="2x" />
                    <h4>Technical Leadership</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLaravel} size="2x" />
                    <h4>Laravel PHP</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCodeBranch} size="2x" />
                    <h4>GIT</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCloud} size="2x" />
                    <h4>AWS Lambda</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faNetworkWired} size="2x" />
                    <h4>MVC</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSyncAlt} size="2x" />
                    <h4>Ajax</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlug} size="2x" />
                    <h4>API</h4>
                </div>
            </div>
        </section>
    );
};

export default Skills;
