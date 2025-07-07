import React from 'react';
import gamePortfolioData from '../../data/gamePortfolioData';
import GamePortfolioCard from './GamePortfolioCard';
import '../Portfolio.css';


const GamePortfolioTable = () => (
  <div className="portfolio-table">
    {gamePortfolioData.map((project) => (
      <GamePortfolioCard key={project.id} project={project} />
    ))}
  </div>
);

export default GamePortfolioTable;
