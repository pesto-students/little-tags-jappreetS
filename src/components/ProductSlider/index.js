import React, { useState } from 'react';

import Arrow from '../Arrow';
import Dots from '../Dots';
import ProductSlide from '../ProductSlide';
import ProductSliderContent from '../ProductSliderContent';

import './ProductSlider.scss';

const ProductSlider = ({ slides }) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    activeIndex: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div className="ProductSlider">
      <ProductSliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => (
          <ProductSlide key={slide + i} content={slide} />
        ))}
      </ProductSliderContent>

      <Arrow direction="left" onClick={prevSlide} />
      <Arrow direction="right" onClick={nextSlide} />

      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
};

export default ProductSlider;
