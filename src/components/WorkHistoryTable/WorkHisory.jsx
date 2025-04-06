import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WorkHistoryTable from '../components/WorkHistoryTable/WorkHistoryTable';
import './assets/css/main.css';
import './assets/css/noscript.css';

const WorkHistory = () => {
  return (
    <div className="is-preload">
      <Header />
      
      <div id="wrapper">
        <section id="main" className="wrapper">
          <div className="inner">
            <h1 className="major">Work History</h1>
          </div>
        </section>
        
        <WorkHistoryTable />
      </div>

      <Footer />
    </div>
  );
};

export default WorkHistory;