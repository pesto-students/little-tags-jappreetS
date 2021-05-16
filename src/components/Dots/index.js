import React from 'react';

import './Dots.scss';

const Dot = ({ active }) => (
  <span
    className="Dot"
    style={{ background: `${active ? '#000' : '#A0A0A0'}` }}
  />
);

const Dots = ({ slides, activeIndex }) => (
  <div className="Dots">
    {slides.map((slide, i) => (
      <Dot key={i} active={activeIndex === i} />
    ))}
  </div>
);

export default Dots;
