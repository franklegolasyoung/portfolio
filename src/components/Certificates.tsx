// filepath: /workspaces/portfolio/src/components/Certificates.tsx
import React from "react";
import '../assets/styles/Certificates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCloud, faAward } from '@fortawesome/free-solid-svg-icons';

const certificates = [
  {
    title: "Alibaba Cloud Security Challenge",
    subtitle: "Third Prize",
    icon: faTrophy,
    year: "2023"
  },
  {
    title: "Google Professional Cloud Architect",
    subtitle: "",
    icon: faCloud,
    year: "2022"
  },
  {
    title: "CCF Excellent Student Award",
    subtitle: "",
    icon: faAward,
    year: "2021"
  }
];

function Certificates() {
  return (
    <div id="certificates" className="items-container">
      <h1>Certificates & Awards</h1>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div className="certificate-card" key={idx}>
            <div className="cert-icon">
              <FontAwesomeIcon icon={cert.icon} />
            </div>
            <div className="cert-title">{cert.title}</div>
            {cert.subtitle && <div className="cert-subtitle">{cert.subtitle}</div>}
            <div className="cert-year">{cert.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;