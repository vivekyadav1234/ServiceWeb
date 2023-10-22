import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TechnologyCarousel.css'

const TechnologyCarousel = () => {
  const technologyNames = [
    'ReactJS',
    'Angular',
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Java',
    'Ruby on Rails',
    'Vue.js',
    'TypeScript',
    'PHP',
    'Bootstrap',
    'SASS',
    'Django',
    'C#',
    'Swift',
    'Kotlin',
  ];

  return (
    <section className="tech-stack">
        <div className="containerForCar">
            <h2>A WIDE SELECTION OF TECHNOLOGIES</h2>
            <p>Explore a diverse range of cutting-edge technologies to fuel your success and innovation.</p>
            <hr className="hr-line" />
        </div>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {technologyNames.map((technology, index) => (
            <div key={index}>
            <p className="carousel-text">{technology}</p>
            </div>
        ))}
        </Carousel>
    </section>
    
  );
};

export default TechnologyCarousel;
