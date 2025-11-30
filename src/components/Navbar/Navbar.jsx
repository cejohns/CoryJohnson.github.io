import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const bannerSrc = `${process.env.PUBLIC_URL}/images/banner.png`;

  return (
    <header className="site-header">
      {/* Top banner image */}
      <div className="navbar-banner">
        <img
          src={bannerSrc}
          alt="Cory Evan Johnson portfolio banner"
        />
      </div>

      {/* Sticky nav bar under banner */}
      <nav className="navbar bg-black sticky top-0 z-50 border-b border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          {/* Left: Name / logo */}
          <HashLink
            smooth
            to="/#hero"
            className="navbar-brand"
            onClick={() => setIsOpen(false)}
          >
            CORY EVAN JOHNSON
          </HashLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Links */}
          <div
            className={`
              navbar-links
              ${isOpen ? 'block' : 'hidden'}
              md:flex md:items-center
            `}
          >
            <HashLink
              smooth
              to="/#about"
              onClick={() => setIsOpen(false)}
              className="navbar-link"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="/#education"
              onClick={() => setIsOpen(false)}
              className="navbar-link"
            >
              Education
            </HashLink>

            <HashLink
              smooth
              to="/#projects"
              onClick={() => setIsOpen(false)}
              className="navbar-link"
            >
              Projects
            </HashLink>

            <HashLink
              smooth
              to="/#games"
              onClick={() => setIsOpen(false)}
              className="navbar-link"
            >
              Games
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="navbar-link"
            >
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
