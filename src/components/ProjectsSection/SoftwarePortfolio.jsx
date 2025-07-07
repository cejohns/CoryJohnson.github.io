import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SoftwarePortfolioTable from './SoftwarePortfolioTable';

const SoftwarePortfolio = () => (
  <div className="is-preload">
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Web/Software/Automation Portfolio</h1>
        </div>
      </section>

      <SoftwarePortfolioTable />
    </div>

    <Footer />
  </div>
);

export default SoftwarePortfolio;
