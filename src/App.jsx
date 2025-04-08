import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectsSection';
import GamesSection from './components/GamesSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkHistory from './components/WorkHistoryTable/WorkHistory';

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <GamesSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </div>

      <Routes>
        <Route path="/resume" element={<ResumeSection />} />
        <Route path="/workhistory" element={<WorkHistory />} />
      </Routes>
    </>
  );
}

export default App;
