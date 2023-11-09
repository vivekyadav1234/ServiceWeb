// src/components/Header.js
import { Link,useLocation } from 'react-router-dom';
import './Header.css'; // Create a new CSS file for your header styles
import React, { useState,useEffect } from 'react';
// const ContactDropdown = () => {
//   return (
//     <div className='contact-dropdown open'>
//       <a href="https://wa.me/919607313093" target="_blank" rel="noopener noreferrer">
//         WhatsApp
//       </a>
//       <a href="mailto:kumarvivek25101@gmail.com">Email Us</a>
//     </div>
//   );
// };
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const phoneNumber = '1234567890';  // Replace with the recipient's phone number
  const message = 'Hello, this is Vivek ! How i can help you ?';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);
    setIsDropdownOpen(false);
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
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className={`navbar ${navbarBackground ? 'navbar-scroll' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">ServiPro</Link>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li onClick={toggleMenu}>
              <Link to="/" className={location.pathname === '/' ? 'isActive' : ''}>
                Home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about" className={location.pathname === '/about' ? 'isActive' : ''}>
                About
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/services" className={location.pathname === '/services' ? 'isActive' : ''}>
                Services
              </Link>
            </li>
            <li>
            <div className="contact-buttons">
              <span className='contact' onClick={toggleDropdown}>
                Contact US
              </span>
              {isDropdownOpen && <div className='contact-dropdown'>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a href="mailto:kumarvivek25101@gmail.com">Email Us</a>
                </div>}
             </div>
             {/* {isDropdownOpen && <ContactDropdown />} */}
            </li>
            {/* Add other navigation items and use the location object to determine the active link */}
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
