// filepath: /workspaces/portfolio/src/components/Certificates.tsx
import React from "react";
import '../assets/styles/Certificates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCloud, faAward } from '@fortawesome/free-solid-svg-icons';

const certificates = [
  {
    title: "Oracle AI Vector Search Certified Professional",
    subtitle: "",
    icon: faTrophy,
    year: "2025"
  },
  {
    title: "NVIDIA: Building RAG Agents with LLMs",
    subtitle: "",
    icon: faCloud,
    year: "2025"
  },
  {
    title: "Microsoft: Career Essentials in Cyber Security",
    subtitle: "",
    icon: faCloud,
    year: "2024"
  },
  {
    title: "Imperial College London: Mathematics for Machine Learning",
    subtitle: "",
    icon: faTrophy,
    year: "2021"
  },
  {
    title: "Stanford University: Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    subtitle: "",
    icon: faTrophy,
    year: "2021"
  },
  {
    title: "Academic Scholarship from Harbin Institute of Technology",
    subtitle: "",
    icon: faAward,
    year: "2020"
  },
  {
    title: "Individual Scholarship from Harbin Institute of Technology",
    subtitle: "",
    icon: faAward,
    year: "2019"
  },
  {
    title: "Community Work Scholarship from Harbin Institute of Technology",
    subtitle: "",
    icon: faAward,
    year: "2019"
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

