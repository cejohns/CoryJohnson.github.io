import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout/HomeLayout';
import ResumeSection from './components/ResumeSection/ResumeSection';
import WorkHistory from './components/WorkHistoryTable/WorkHistory';



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/workhistory" element={<WorkHistory />} />
      </Routes>
 
  );
}

export default App;
