// src/components/Home.js

import React from 'react';
import Banner from './Banner';
import './Home.css'; // Create a new CSS file for your home page styles

function Home() {
  return (
    <div>
      <Banner />
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Web App Development</h3>
            <p>We provide one-stop solutions for Web Application Development. Our team develops custom web applications for clients all over the world.</p>
          </div>
          <div className="service-card">
            <h3>Software Testing</h3>
            <p>Our commitment to excellence shines through our Software Testing services, ensuring impeccable performance and reliability for your solutions.</p>
          </div>
          <div className="service-card">
            <h3>DevOps</h3>
            <p>Seamlessly bridge development and operations with our DevOps solutions, ensuring agile, reliable, and high-performing software delivery.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
