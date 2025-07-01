// src/components/HomeLayout.jsx
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from '../EducationSection/EducationSection';
import ProjectSection from './ProjectsSection';
import GamesSection from './GamesSection';
import ResumeSection from './ResumeSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function HomeLayout() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectSection />
      <GamesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
