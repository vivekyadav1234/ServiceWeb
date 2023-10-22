import React from 'react';
import './ProcessSection.css'; // Import your CSS file

const ProcessSection = () => {
  return (
      
    <section className="process-section">
        <h2>OUR PROCESS IN ACTION</h2>
        <hr className="hr-line" />
      <div className="process-content">
        <div className="process-image">
          <img src="/pross1.png" alt="Process" />
        </div>
        <div className="process-text">
          <ul>
            <li>
              <h4>1. Connect and Explore</h4>
              <p>
                It all begins with you. Schedule an exploration call to initiate our journey together. During this call, we delve into your aspirations, needs, and possibilities, setting the stage for a tailored and meaningful collaboration.
              </p>
            </li>
            <li>
              <h4>2. Solution and Team Discussion</h4>
              <p>
                We engage in thoughtful discussions about your solution and define the ideal team structure. This ensures that our path forward aligns perfectly with your project's unique requirements.
              </p>
            </li>
            <li>
              <h4>3. Launch and Performance Monitoring</h4>
              <p>
                As your project takes flight, we guide you through the initial steps and assist in monitoring its performance. Tracking key metrics empowers us to fine-tune our strategies for optimal results.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
