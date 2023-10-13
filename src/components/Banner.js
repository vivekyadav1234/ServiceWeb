// src/components/Banner.js

import React from 'react';
import './Banner.css'; // Create a new CSS file for your banner styles

function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <h1>Fintech Software Development Company</h1>
        <p>Gloify is a leading software development company, empowering businesses to transform their ideas into reality.</p>
      </div>
      <div className="image">
        <img src="image-url.jpg" alt="Gloify Image" /> {/* Replace 'image-url.jpg' with your image file path */}
      </div>
    </div>
  );
}

export default Banner;
