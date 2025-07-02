import Navbar from '../Navbar'; // ✅ Add this import
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
      <Navbar />  {/* ✅ This is what makes it show up! */}

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="games">
        <GamesSection />
      </section>

      <section id="resume">
        <ResumeSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}
