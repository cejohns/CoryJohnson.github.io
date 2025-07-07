import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout/HomeLayout';
import ResumeSection from './components/ResumeSection/ResumeSection';
import WorkHistory from './components/WorkHistoryTable/WorkHistory';
import EducationHistory from './components/EducationSection/EducationHistory';
import GamePortfolio from './components/GamesSection/GamePortfolio';
import SoftwarePortfolio from './components/ProjectsSection/SoftwarePortfolio';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/workhistory" element={<WorkHistory />} />
        <Route path="/educationhistory" element={<EducationHistory />} />
        <Route path="/gameportfolio" element={<GamePortfolio />} />
        <Route path="/softwareportfolio" element={<SoftwarePortfolio />} />
      </Routes>
 
  );
}

export default App;
