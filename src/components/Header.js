// src/components/Header.js

import { Link } from 'react-router-dom';
import './Header.css'; // Create a new CSS file for your header styles
import React, { useState,useEffect } from 'react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0); 
  };
  const changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBackground);

    return () => {
      window.removeEventListener('scroll', changeNavbarBackground);
    };
  }, []);
  

  return (
    <nav className={`navbar ${navbarBackground ? 'navbar-scroll' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">ServiPro</Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMenu}><Link to="/about">About</Link></li>
            <li onClick={toggleMenu}><Link to="/services">Services</Link></li>
            {/* <li><Link to="/portfolio">Portfolio</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Header;