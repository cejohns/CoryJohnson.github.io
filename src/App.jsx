import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout/HomeLayout';
import ResumeSection from './components/ResumeSection/ResumeSection';
import WorkHistory from './components/WorkHistoryTable/WorkHistory';
import EducationHistory from './components/EducationSection/EducationHistory';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/workhistory" element={<WorkHistory />} />
        <Route path="/educationhistory" element={<EducationHistory />} />

      </Routes>
 
  );
}

export default App;
