import React from "react";
import chatlah from '../assets/images/chatlah.png';
import pixcloud from '../assets/images/pixcloud.jpg';
import zotero from '../assets/images/zotero.png';
import cosped from '../assets/images/cosped.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.pixcloud.cc/" target="_blank" rel="noreferrer"><img src={pixcloud} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.pixcloud.cc/" target="_blank" rel="noreferrer"><h2>PixCloud</h2></a>
                <p>Developed Image Storage, Sharing, and Cooperation Platform, built with Spring Boot, Vue 3, MySQL, Redis, AWS, COS Storage, CDN Acceleration</p>
            </div>
            <div className="project">
                <a href="https://www.chatlah.cc" target="_blank" rel="noreferrer"><img src={chatlah} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.chatlah.cc" target="_blank" rel="noreferrer"><h2>ChatLah</h2></a>
                <p>Developed and released a LLM Agent chatbot platform, integrated with multiple MCP providers and personalized RAG knowledge base.</p>
            </div>
            <div className="project">
                <a href="https://www.semanticscholar.org/paper/CoSPED%3A-Consistent-Soft-Prompt-Targeted-Data-and-Yang-Wai/fb09eaceb17a4813fd8ce3496d01e1c78c6cec06" target="_blank" rel="noreferrer"><img src={cosped} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.semanticscholar.org/paper/CoSPED%3A-Consistent-Soft-Prompt-Targeted-Data-and-Yang-Wai/fb09eaceb17a4813fd8ce3496d01e1c78c6cec06" target="_blank" rel="noreferrer"><h2>CoSPED Research Paper</h2></a>
                <p>Published research on LLM security vulnerabilities and privacy leakage. Accepted by AAAI 26 AI Alignment Track. Introduced CoSPED framework for consistent soft prompt targeted data extraction, achieving 65.2% extraction rate, and demonstrated effective defense strategies reducing extraction to 1.6%.</p>
            </div>
            <div className="project">
                <a href="https://github.com/franklegolasyoung/zotero-snap" target="_blank" rel="noreferrer"><img src={zotero} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/franklegolasyoung/zotero-snap" target="_blank" rel="noreferrer"><h2>Zotero Snap</h2></a>
                <p>Developed and worked as key maintainer and contributor to a Linux Snap Store extension for Zotero, enabling users to install and control Zotero in Linux Environment more conveniently.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;