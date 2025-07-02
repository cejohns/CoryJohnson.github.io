import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import EducationSection from '../EducationSection/EducationSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import GamesSection from '../GamesSection/GamesSection';
import ResumeSection from '../ResumeSection/ResumeSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';

export default function HomeLayout() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <GamesSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
