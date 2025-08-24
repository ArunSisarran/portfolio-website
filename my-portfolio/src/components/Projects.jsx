import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SkinGuard AI",
      description: "An AI-powered web application for skin cancer detection using deep learning. SkinGuard AI assists in the early identification of melanoma versus non-melanoma skin lesions through advanced computer vision techniques.",
      link: "https://skin-guard-ai.vercel.app/"
    },
    {
      id: 2,
      title: "Fast Break Bets",
      description: "FastBreak Bets helps users make informed sports betting decisions by providing real-time NBA data and AI-generated betting parlays. Whether you're looking for safe bets or high-risk, high-reward parlays, FastBreak Bets gives you the insights you need. ",
      link: "https://github.com/ArunSisarran/FastBreak-Bets"
    },
    {
      id: 3,
      title: "FuelU",
      description: "FuelU is a web app that helps college students cook affordable, approachable meals at home. Our mission is to make healthy eating more accessible by providing easy-to-follow recipes that inspire confidence in the kitchen—reducing reliance on takeout and supporting student wellness. ",
      link: "https://fuel-u.vercel.app/"
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card" onClick={() => window.open(project.link, '_blank')}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-link-indicator">
                  <span>View Project →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
