import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-black sticky top-0 z-50 border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
    

   

        <div
  className={`navbar-links ${
    isOpen ? 'block' : 'hidden'
  } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center bg-black md:bg-transparent p-4 md:p-0`}
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
  );
}
