import React from 'react';
import PropTypes from 'prop-types';
import './WorkHistoryTable.css';

const WorkHistoryCard = ({ job }) => {
  return (
    <div className="job-card">
      <img
        src={job.logo}
        alt={`${job.company} logo`}
        className="company-logo"
      />
      <div className="job-details">
        <h3>{job.company}</h3>
        <h4>{job.role}</h4>
        <p>{job.date}</p>
        <ul>
          {job.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

WorkHistoryCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    company: PropTypes.string,
    role: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default WorkHistoryCard;
