import React from 'react';
import workHistoryData from '../../data/workHistoryData'; 

const WorkHistoryTable = () => {
  return (
    <div className="work-history-table">
      {workHistoryData.map((job) => (
        <div key={job.id} className="job-card">
          <img
             src={job.logo} //src={`/images/${job.logo}`} // ✅ This uses the public folder
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
      ))}
    </div>
  );
};

export default WorkHistoryTable;
