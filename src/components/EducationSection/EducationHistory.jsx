import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EducationTable from './EducationTable';

const EducationHistory = () => {
  return (
    <div className="is-preload">
      <Header />

      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">Education History</h1>
          </div>
        </section>

        <EducationTable />
      </div>

      <Footer />
    </div>
  );
};

export default EducationHistory;
