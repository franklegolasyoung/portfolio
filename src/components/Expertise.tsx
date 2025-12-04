import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "C++",
    "Spring Boot",
    "Vue.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "ElasticSearch",
    "Redis"
];

const labelsSecond = [
    "Docker",
    "Nginx",
    "Kafka",
    "RabbitMQ",
    "Git",
    "GitHub Actions",
    "AWS EC2",
    "AWS RDS",
    "GCP",
    "Linux",
    "CI/CD"
];

const labelsThird = [
    "PyTorch",
    "LangGraph",
    "RAG",
    "LLM",
    "Agents",
    "MCP",
    "OpenAI",
    "Hugging Face",
    "LLM Security"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Experienced in building scalable web applications using Spring Boot, Flask, and FastAPI. Proficient in both frontend (React, TypeScript) and backend development with a strong understanding of RESTful APIs and microservices architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                        {/* <LinearProgress variant="determinate" value={90} /> */}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Cloud Infrastructure</h3>
                    <p>Skilled in containerization, orchestration, and cloud deployment. Experience with Docker, Kafka, RabbitMQ for distributed systems, and CI/CD pipelines using GitHub Actions on AWS and GCP platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                        {/* <LinearProgress variant="determinate" value={80} /> */}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>Building intelligent applications with LLMs, RAG systems, and AI agents. Hands-on experience with PyTorch, LangGraph, and Model Context Protocol (MCP) for creating context-aware AI solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;