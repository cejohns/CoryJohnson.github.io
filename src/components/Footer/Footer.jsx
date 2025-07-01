// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="mt-16 py-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Cory Johns. All rights reserved.</p>
        <p className="mt-1">
          Built with <span className="text-pink-400">React</span> &amp; <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </footer>
    );
  }
  