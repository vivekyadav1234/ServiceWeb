import React from 'react';
import './ContentCard.css'; // Adjust the path to match the location of your CSS file

const ContentCard = (props) => {
  const { title, description, imageUrl } = props;

  return (
      
    <div className="content-card">
        <div className="image">
            <img src={imageUrl} alt={title} />
        </div>
        <div className="info">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>


  );
};

export default ContentCard;
