// src/components/Home.js

import React from 'react';
import Banner from './Banner';
import './Home.css'; // Create a new CSS file for your home page styles
import ContentCard from './ContentCard'; // Import the ContentCard component
import './ContentCard.css'; // Import the CSS file
import ProcessSection from './ProcessSection'
import InduSolution from './InduSolution'
import OurSolution from './OurSolution'
function Home() {
  const contentCards = [
    {
      name: 'Web Application Development',
      description: 'Experience comprehensive Web Application Development solutions under one roof. Our team specializes in crafting bespoke web applications for clients worldwide',
      imageUrl:'/webdev1.png'
    },
    {
      name: 'Mobile Application Development',
      description: 'Unlock the full potential of your business with our customized mobile application development services. We mobilize your business, enabling seamless operation anytime, anywhere.',
      imageUrl:'/mob.webp'
    },
    {
      name: 'DevOps Solutions',
      description: 'Effortlessly bridge the gap between development and operations with our DevOps services. We guarantee agile, reliable, and high-performance software delivery.',
      imageUrl:'/deops.webp'
    },
    {
      name: 'Innovative UI/UX Design',
      description: 'We blend creativity with functionality through our innovative UI/UX design. We craft user-centric interfaces that foster meaningful connections and enhance user experiences.',
      imageUrl:'/uiux.webp'
    },
    {
      name: 'Strategic Digital Marketing',
      description: 'Achieve engagement, conversion, and success with our customized Digital Marketing services. We combine data-driven insights with impactful online strategies to drive your business forward.',
      imageUrl:'/market1.png'
    },
    {
      name: 'Software Quality Assurance',
      description: 'Our dedication to excellence shines through our Software Quality Assurance services. We ensure impeccable performance and reliability for your solutions, giving you peace of mind.',
      imageUrl:'/test1.png'
    },
  ];
  return (
    <div>
      <Banner/>
      <div className="contact-page">
         <h2 className="hcolor">WHY CHOOSE SERVIPRO</h2>
         <hr className="hr-line" />
      </div>
      <div className="content-cards card-container">
        {contentCards.map((card, index) => (
          <ContentCard
            key={index}
            title={card.name}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <ProcessSection/>
      <InduSolution/>
      <OurSolution/>
      <div className="contact-page">
      <h1 className='hcolor'>Contact Us</h1>
      <hr className="hr-line" />
      <p>Feel free to reach out to us through the following contact information:</p>
      <div className="contact-details">
        <div className="address">
          <h2>Address</h2>
          <p>BTM Layout, Bengaluru,</p>
          <p>Karnataka, India 560076</p>
        </div>
        <div className="phone">
          <h2>Phone</h2>
          <p>+91 9607313093</p>
        </div>
        <div className="email">
          <h2>Email</h2>
          <p>kumarvivek25101@gmail.com</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
