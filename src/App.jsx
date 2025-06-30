import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import ResumeSection from './components/ResumeSection';
import WorkHistory from './components/WorkHistoryTable/WorkHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/workhistory" element={<WorkHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
