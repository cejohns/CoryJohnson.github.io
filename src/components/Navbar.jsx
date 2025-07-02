import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          Cory Johnson
        </div>

        <button
          className="navbar-toggle md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar-links ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <HashLink smooth to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </HashLink>
          <HashLink smooth to="/#about" className="navbar-link" onClick={() => setIsOpen(false)}>
            About
          </HashLink>
          <HashLink smooth to="/#education" className="navbar-link" onClick={() => setIsOpen(false)}>
            Education
          </HashLink>
          <HashLink smooth to="/#projects" className="navbar-link" onClick={() => setIsOpen(false)}>
            Projects
          </HashLink>
          <HashLink smooth to="/#games" className="navbar-link" onClick={() => setIsOpen(false)}>
            Games
          </HashLink>
          <HashLink smooth to="/#contact" className="navbar-link" onClick={() => setIsOpen(false)}>
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
}
