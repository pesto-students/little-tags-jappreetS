import React, { useState, useEffect } from 'react';

import './ProductCard.scss';

const ProductCard = ({
  className,
  caption,
  isClickable = true,
  name,
  variant = 'primary',
  ...rest
}) => {
  let [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const importImg = async () => {
      let importedImg = await import(
        `./../../global/assets/images/${name}@2x.png`
      );
      setImgSrc(importedImg.default);
    };

    importImg();
  }, [name]);

  return (
    <div
      className={`ProductCard d-flex ${variant} ${
        !!isClickable ? 'cursor-pointer' : ''
      } ${!!className ? className : ''}`}
      style={{ backgroundImage: `url(${imgSrc})` }}
      {...rest}
    >
      {!!caption && (
        <div className="ProductCard-caption d-flex align-items-center align-self-end">
          {caption}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
