import React from 'react';

import './ProductSliderContent.scss';

const ProductSliderContent = ({ children, translate, transition, width }) => {
  return (
    <div
      className="ProductSliderContent"
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        width: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default ProductSliderContent;
