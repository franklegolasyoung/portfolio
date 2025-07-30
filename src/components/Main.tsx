import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          <div className="profile-views">
            <img src="https://komarev.com/ghpvc/?username=franklegolasyoung&label=Profile%20views&base=3097&color=blue&style=for-the-badge" alt="Visitors" />
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/franklegolasyoung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zhuochenyang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Zhuochen Yang</h1>
          <p>Cyber Security Research Engineer</p>
          <div className="about-detail">
            <p>
              ABOUT MEEEEEEEEEEEEEEEE
            </p>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/franklegolasyoung" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zhuochenyang/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

