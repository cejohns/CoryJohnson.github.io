import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WorkHistoryTable from './WorkHistoryTable'; // if it's in the same folder



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