// Service.js
import React from 'react';
import Banner from './Banner';
import ContentCard from './ContentCard'; 
import './Service.css';
import WhyChoose from './WhyChoose';
import TechnologyCarousel from './TechnologyCarousel';
import Gmap from './Gmap';
function Service() {
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
  <section className="vision-section">
    <div className="container">
      <div className="vision-content">
        <h2>Transforming Your Vision into Reality</h2>
        <p>
          At our software development company, we're dedicated to bringing your innovative ideas to life. We go beyond crafting cutting-edge applications, building robust systems, and designing user-friendly interfaces – we make your dreams tangible.
        </p>
      </div>
    </div>
  </section>
  <div className="grid-section">
    <div className="grid-item">
      <h3>Customized Solutions: Tailored to Your Needs</h3>
      <p>Our solutions are as unique as your business. We customize our services to suit your specific requirements.</p>
    </div>
    <div className="grid-item">
      <h3>Forward-Thinking Method: Pioneering Solutions</h3>
      <p>We embrace innovation to provide you with the latest and most effective software solutions.</p>
    </div>
    <div className="grid-item">
      <h3>User-Focused Design: Prioritizing the User Experience</h3>
      <p>Our designs are centered around the end user, ensuring a seamless and enjoyable experience.</p>
    </div>
    <div className="grid-item">
      <h3>Dynamic Development: Adapting to Your Changing Needs</h3>
      <p>We employ agile methodologies to stay flexible and responsive to your evolving demands.</p>
    </div>
    <div className="grid-item">
      <h3>Outstanding Team: Experts at Your Service</h3>
      <p>Our dedicated team of professionals brings unmatched skills and commitment to every project.</p>
    </div>
    <div className="grid-item">
      <h3>Punctual Delivery: On Schedule, Every Time</h3>
      <p>We understand the importance of meeting deadlines and consistently deliver your solutions promptly.</p>
    </div>
  </div>

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
  <WhyChoose/>
  <TechnologyCarousel/>
  <Gmap/>
  </div>
  )};

export default Service;
