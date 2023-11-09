// src/components/Home.js

import React from 'react';
import Banner from './Banner';
import './Home.css'; // Create a new CSS file for your home page styles
import ContentCard from './ContentCard'; // Import the ContentCard component
import './ContentCard.css'; // Import the CSS file
import ProcessSection from './ProcessSection';
import InduSolution from './InduSolution';
import OurSolution from './OurSolution';
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Gmap from './Gmap';
import TechnologyCarousel from './TechnologyCarousel';
function Home() {
  const contentCards = [
    {
      name: 'Web Application Development',
      descriptionsData: 'Experience comprehensive Web Application Development solutions under one roof. Our team specializes in crafting bespoke web applications for clients worldwide',
      imageUrl:'/webdev1.png'
    },
    {
      name: 'Mobile Application Development',
      descriptionsData: 'Unlock the full potential of your business with our customized mobile application development services. We mobilize your business, enabling seamless operation anytime, anywhere.',
      imageUrl:'/mob.webp'
    },
    {
      name: 'DevOps Solutions',
      descriptionsData: 'Effortlessly bridge the gap between development and operations with our DevOps services. We guarantee agile, reliable, and high-performance software delivery.',
      imageUrl:'/deops.webp'
    },
    {
      name: 'Innovative UI/UX Design',
      descriptionsData: 'We blend creativity with functionality through our innovative UI/UX design. We craft user-centric interfaces that foster meaningful connections and enhance user experiences.',
      imageUrl:'/uiux.webp'
    },
    {
      name: 'Strategic Digital Marketing',
      descriptionsData: 'Achieve engagement, conversion, and success with our customized Digital Marketing services. We combine data-driven insights with impactful online strategies to drive your business forward.',
      imageUrl:'/market1.png'
    },
    {
      name: 'Software Quality Assurance',
      descriptionsData: 'Our dedication to excellence shines through our Software Quality Assurance services. We ensure impeccable performance and reliability for your solutions, giving you peace of mind.',
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
            descriptionsData={card.descriptionsData}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <ProcessSection/>
      <InduSolution/>
      <OurSolution/>
     <TechnologyCarousel/>
      <div className="contact-page">
      <h2 className='hcolor'>CONTACT US</h2>
      <hr className="hr-line" />
      <p>Feel free to reach out to us through the following contact information:</p>
      {/* <div className="contact-details">
        <div className="address">
          <h3>Address</h3>
          <p>BTM Layout, Bengaluru,</p>
          <p>Karnataka, India 560076</p>
        </div>
        <div className="phone">
          <h3>Phone</h3>
          <p>+91 9607313093</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>kumarvivek25101@gmail.com</p>
        </div>
      </div> */}
       <div className="contact-container">
        <ContactForm />
        <ContactInfo />
      </div>
      <Gmap/>
    </div>
    </div>
  );
}

export default Home;
