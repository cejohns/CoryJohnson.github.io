import React from 'react';
import PropTypes from 'prop-types';
import './EducationSection.css';

const EducationCard = ({ education }) => (
  <div className="education-card">
    <img
      src={education.logo}
      alt={`${education.institution} logo`}
      className="institution-logo"
    />
    <div className="education-details">
      <h3>{education.institution}</h3>
      <h4>{education.degree}</h4>
      <p>{education.date}</p>
      <ul>
        {education.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  </div>
);

EducationCard.propTypes = {
  education: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    institution: PropTypes.string,
    degree: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default EducationCard;
