import Button from '../ui/Button';
import './HeroSection.css';
import Navbar from '../Navbar/Navbar';


export default function HeroSection() {
  return (
  <section className="hero-section">
  <div className="hero-container">
    <div className="hero-profile">
      <img
        src={`${process.env.PUBLIC_URL}/images/Cory.webp`}
        alt="Cory Johns"
      />
    </div>

    <div className="hero-text">
      <h1>Cory Johnson</h1>
      <p>
        Web Developer • Game Developer • Automation Enthusiast • Software Developer
      </p>
      <a href="#contact" className="hero-button">
        Contact Me
      </a>
    </div>
  </div>

 
</section>

  );
}
