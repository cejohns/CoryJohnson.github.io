import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <a href="index.html" className="title">Cory Johnson</a>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;