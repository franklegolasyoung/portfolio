import React from "react";
import chatlah from '../assets/images/chatlah.png';
import pixcloud from '../assets/images/pixcloud.jpg';
import zotero from '../assets/images/zotero.png';

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
                <a href="https://github.com/franklegolasyoung/zotero-snap" target="_blank" rel="noreferrer"><img src={zotero} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/franklegolasyoung/zotero-snap" target="_blank" rel="noreferrer"><h2>Zotero Snap</h2></a>
                <p>Developed and worked as key maintainer and contributor to a Linux Snap Store extension for Zotero, enabling users to install and control Zotero in Linux Environment more conveniently.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;