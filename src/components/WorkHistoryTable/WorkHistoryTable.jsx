import React from 'react';
import './WorkHistoryTable.css';
import workHistoryData from '../../data/workHistoryData';
import WorkHistoryCard from './WorkHistoryCard';

const WorkHistoryTable = () => {
  return (
    <div className="work-history-table">
      {workHistoryData.map((job) => (
        <WorkHistoryCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkHistoryTable;
