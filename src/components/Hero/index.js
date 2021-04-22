import React from 'react';

import './Hero.scss';

const Hero = () => {
  return (
    <div className="Hero d-flex justify-content-center align-items-center">
      <div className="overlay" />
      <div className="Hero-text">
        <div className="Hero-text__line1">Online Flee Market for Clothes</div>
        <div className="Hero-text__line2">Its time to recycle</div>
      </div>
    </div>
  );
};

export default Hero;
