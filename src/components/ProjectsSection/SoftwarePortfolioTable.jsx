import React from 'react';
import softwarePortfolioData from '../../data/softwarePortfolioData';
import SoftwarePortfolioCard from './SoftwarePortfolioCard';
import '../Portfolio.css';


const SoftwarePortfolioTable = () => (
  <div className="portfolio-table">
    {softwarePortfolioData.map((project) => (
      <SoftwarePortfolioCard key={project.id} project={project} />
    ))}
  </div>
);

export default SoftwarePortfolioTable;
