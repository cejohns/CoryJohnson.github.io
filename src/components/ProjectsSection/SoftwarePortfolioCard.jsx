import React from 'react';
import PropTypes from 'prop-types';
import '../Portfolio.css';

const SoftwarePortfolioCard = ({ project }) => (
  <div className="portfolio-card">
    <img src={project.logo} alt={`${project.title} logo`} className="portfolio-logo" />
    <div className="portfolio-details">
      <h3>{project.title}</h3>
      <h4>{project.role}</h4>
      <p>{project.date}</p>
      <ul>
        {project.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
        View Repository
      </a>
    </div>
  </div>
);

SoftwarePortfolioCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    title: PropTypes.string,
    role: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string
  }).isRequired
};

export default SoftwarePortfolioCard;
