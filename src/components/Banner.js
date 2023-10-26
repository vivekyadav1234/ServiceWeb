// src/components/Banner.js

import React from 'react';
import './Banner.css'; // Create a new CSS file for your banner styles
import { useLocation ,Link} from 'react-router-dom';

function Banner() {
  const location = useLocation();
  let heading = "ELEVATE YOUR BUSINESS TO NEW HEIGHTS";

  if (location.pathname === '/services') {
    heading = "Supercharge Your Services with Our Solutions";
  } else if (location.pathname === '/about') {
    heading = "Discover Our Company's Story and Values";
  }
  return (
    <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">{heading}</h1>
          <p className="banner-text">
          Arm Your Team with Leading-Edge Software Solutions.
          </p>
        {location.pathname === '/' &&  <Link className='linkServ' to="/services">See Our Service </Link>}
        </div>
      </div>
  
  );
}

export default Banner;
