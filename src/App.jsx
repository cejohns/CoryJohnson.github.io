import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectsSection';
import GamesSection from './components/GamesSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <GamesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
