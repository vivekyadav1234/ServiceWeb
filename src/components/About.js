// About.js
import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Gmap from './Gmap';
//import vivekImage from './vivek.jpg'; // Import the image for Vivek Kumar Yadav
//import raviImage from './ravi.jpg';   // Import the image for Ravi Shankar Jha
import './About.css';
function About() {
  return (
    <div>
      <Banner/>

      <div className="journey-section">
        <div className="journey-content">
          <h3>How I Started My Entrepreneurial Journey</h3>
          <p>
            In 2019, ignited by my entrepreneurial spirit and armed with years of experience in leading multinational corporations, I embarked on a transformative journey to establish Servipro, my brainchild and passion project.
          </p>
          <p>
            Founded in 2022, Servipro marked the inception of my ambitious startup venture. Drawing from my rich industry experience, I set out on a mission to bring cutting-edge solutions to the market. In a relatively short period, I've made remarkable progress, emerging as a dynamic and influential player in the ever-evolving tech industry.
          </p>
          <p>
            This journey is a testament to my unwavering dedication to not only meeting but surpassing expectations. With relentless focus and passion, I am committed to delivering exceptional value to my cherished clients.
          </p>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image">
            <img src="/vivek.jpeg" alt="Vivek" />
          </div>
          <div className="profile-details">
            <h3>Vivek Kumar Yadav</h3>
            <p>Vivek, Director of Technology Development, plays a pivotal role in our company's leadership. He spearheads the front-end team, guiding our technology and innovation efforts with expertise and vision.</p>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-image">
            <img src="/Ravi.jpeg" alt="Ravi" />
          </div>
          <div className="profile-details">
            <h3>Ravi Shankar Jha</h3>
            <p>Ravi leads the company's technological development, overseeing all technical aspects of organizational growth with precision and expertise.</p>
          </div>
        </div>
      </div>
      <div className="contact-page">
         <h2 className="AHcolor">CONTACT US</h2>
         <hr className="hr-line" />
      </div>
      <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
      <Gmap/>
     </div>
  );
}

export default About;
