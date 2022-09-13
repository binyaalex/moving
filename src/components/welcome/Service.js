import React from 'react';

function Service({src, title}) {
    return (
      <div className="service-img-container">
        <p className="service">{title}</p>
        <img className="service-img" src={src} alt="clean" />
      </div>
    );
}

export default Service;