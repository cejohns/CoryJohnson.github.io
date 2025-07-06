import React from 'react';
import educationData from '../../data/educationData';
import EducationCard from './EducationCard';
import './EducationSection.css';

const EducationTable = () => {
  return (
    <div className="education-table">
      {educationData.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  );
};

export default EducationTable;
