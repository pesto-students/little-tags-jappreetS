import React from 'react';

import leftArrow from './../../global/assets/icons/left-arrow-white.svg';
import rightArrow from './../../global/assets/icons/right-arrow-white.svg';

import './Arrow.scss';

const Arrow = ({ direction, onClick }) => {
  return (
    <div
      className="Arrow d-flex justify-content-center align-items-center"
      style={{
        ...(direction === 'right' ? { right: '25px' } : { left: '25px' }),
      }}
      onClick={onClick}
    >
      <img
        alt={direction}
        src={`${direction === 'right' ? rightArrow : leftArrow}`}
      />
    </div>
  );
};

export default Arrow;
