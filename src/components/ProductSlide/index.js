import React from 'react';

import './ProductSlide.scss';

const ProductSlide = ({ content }) => {
  return (
    <div
      className="ProductSlide"
      style={{ backgroundImage: `url(${content})` }}
    />
  );
};

export default ProductSlide;
