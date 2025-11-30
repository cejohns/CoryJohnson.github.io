import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'games', label: 'Games' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleBrandClick = () => {
    // Scroll to top / hero
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <button className="navbar-brand" onClick={handleBrandClick}>
          CORY EVAN JOHNSON
        </button>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              smooth
              to={`/#${item.id}`}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
