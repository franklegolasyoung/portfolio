import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/1739957414629.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="avatar-block">
          <div className="image-wrapper">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/franklegolasyoung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zhuochenyang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@frank1045325433" target="_blank" rel="noreferrer"><MenuBookIcon/></a>
          </div>
          <h1>Zhuochen Yang</h1>
          <p>AI Engineer (Security)</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/franklegolasyoung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zhuochenyang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://medium.com/@frank1045325433" target="_blank" rel="noreferrer"><MenuBookIcon/></a>
          </div>
        </div>
      </div>
      <div className="about-detail">
        <p>
          I am a Singapore-based AI Engineer specializing in LLM Security and Safety, holding a Master of Science in Artificial Intelligence from Nanyang Technological University.
        </p>
        <p>
          Complementing my core expertise in AI and cybersecurity, I actively develop full-stack applications and operate a freelance photography practice, blending technical precision with creative vision to deliver innovative solutions across technology and visual arts domains.
        </p>
        <p>
          Reachable at <a href="mailto:frankyoung@outlook.sg">frankyoung@outlook.sg</a> for collaborative opportunities.
        </p>
      </div>
    </div>
  );
}

export default Main;

