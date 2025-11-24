import React from 'react';

export default function ServiceCard({ image, title, children }) {
  return (
    <div className="flip-card card-margin" style={{marginLeft: '20px'}}>
      <div className="flip-inner">
        <div className="flip-front">
          <div className="service-media">
            <img src={image} alt={title} />
          </div>
          <div className="service-body">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="flip-back">
          <div className="service-back-body">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
