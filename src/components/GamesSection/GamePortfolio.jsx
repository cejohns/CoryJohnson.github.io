import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GamePortfolioTable from './GamePortfolioTable';

const GamePortfolio = () => (
  <div className="is-preload">
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Game Development Portfolio</h1>
        </div>
      </section>

      <GamePortfolioTable />
    </div>

    <Footer />
  </div>
);

export default GamePortfolio;
