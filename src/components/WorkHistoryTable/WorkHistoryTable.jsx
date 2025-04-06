import React from 'react';
import './WorkHistoryTable.css';
import workHistoryData from '../../data/workHistoryData';

// Import all WebP images
import SGS from '../../images/SGS.webp';
import SpiritAeroLogo from '../../images/spiritaero_logo.webp';
// ... import all other WebP images

const logoMap = {
  'SGS.webp': SGS,
  'spiritaero_logo.webp': SpiritAeroLogo,
  // ... add all other image mappings
};

const WorkHistoryTable = () => {
  return (
    <div className="table-container">
      <table className="work-history-table">
        <thead>
          <tr>
            <th>Company Logo</th>
            <th>Name</th>
            <th>Role</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {workHistoryData.map((job) => (
            <tr key={job.id}>
              <td>
                <img 
                  src={logoMap[job.logo]} 
                  alt={`${job.company} logo`} 
                  loading="lazy"
                  width="50"
                  height="50"
                />
              </td>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>
                <ul>
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
              <td>{job.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkHistoryTable;