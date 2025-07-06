import Navbar from '../Navbar/Navbar';

import HeroSection from '../HeroSection/HeroSection';
import AboutSection from '../AboutSection/AboutSection';
import EducationSection from '../EducationSection/EducationSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import GamesSection from '../GamesSection/GamesSection';
import ResumeSection from '../ResumeSection/ResumeSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import './HomeLayout.css';

export default function HomeLayout() {
  return (
    <div className="home-layout">
     

      <section id="hero" className="home-section">
        <HeroSection />
      </section>
       <Navbar />
      <section id="about" className="home-section">
        <AboutSection />
      </section>

      <section id="education" className="home-section">
        <EducationSection />
      </section>

      <section id="projects" className="home-section">
        <ProjectsSection />
      </section>

      <section id="games" className="home-section">
        <GamesSection />
      </section>

      <section id="resume" className="home-section">
        <ResumeSection />
      </section>

      <section id="contact" className="home-section">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
