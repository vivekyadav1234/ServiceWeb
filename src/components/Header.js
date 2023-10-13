// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a new CSS file for your header styles

function Header() {
  return (
    <header className="sticky-header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
