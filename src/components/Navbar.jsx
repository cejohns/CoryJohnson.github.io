// components/Navbar.jsx
import { Link } from 'react-scroll';

<Link to="ResumeSection" smooth={true} duration={500}>
  Go to Resume
</Link>


export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex space-x-6">
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/education">Education</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
