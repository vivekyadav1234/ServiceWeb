import React from 'react';
import './OurSolution.css'; // Import your CSS file

const OurSolution = () => {
  return (
    <section className="solutions-section">
    <h2 className="hcolor">OUR SOLUTIONS ARE METICULOUSLY CRAFTED TO TACKLE DISTINCT IN</h2>
    <hr className="hr-line" />
    <div className="solutions-grid">
      <div className="solutions-item">
        <h3>Fintech Revolution</h3>
        <p>
          Experience the forefront of finance with our cutting-edge Fintech solutions, reshaping the future of financial services.
        </p>
      </div>
      <div className="solutions-item">
        <h3>EdTech Excellence</h3>
        <p>
          Our EdTech mastery paves the way for innovative learning landscapes, transforming education with the latest technology.
        </p>
      </div>
      <div className="solutions-item">
        <h3>Interior Design Innovation</h3>
        <p>
          Unlock comprehensive software solutions for your interior design firm, streamlining your creative process.
        </p>
      </div>
      <div className="solutions-item">
        <h3>Proptech Progress</h3>
        <p>
          Our innovative software solutions are designed to empower your real estate business, driving growth and efficiency.
        </p>
      </div>
    </div>
  </section>
  
   
  );
};

export default OurSolution;
