// src/components/HeroSection/HeroSection.jsx
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-profile">
          <img
            src={`${process.env.PUBLIC_URL}/images/Cory-webj`}
            alt="Cory Evan Johnson"
          />
        </div>

        <div className="hero-text">
          <h1>CORY EVAN JOHNSON</h1>
          <p className="hero-subtitle">
            Mid-Level Software Engineer · Full-Stack Developer (React/Node/TypeScript) ·
            Gameplay Programmer (Unity/C#)
          </p>

          <p className="hero-tagline">
            I build web apps, game systems, and automation tools that connect real users
            to real products and experiences. Based in North Carolina — open to remote and
            on-site roles.
          </p>

          <a href="#contact" className="hero-button">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
