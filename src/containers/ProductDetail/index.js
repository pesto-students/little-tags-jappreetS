import React from 'react';

import Button from '../../components/Button';
import Counter from '../../components/Counter';
import ProductSlider from '../../components/ProductSlider';

import img1 from './../../global/assets/images/product-1@2x.png';
import img2 from './../../global/assets/images/product-2@2x.png';
import img3 from './../../global/assets/images/product-3@2x.png';
import img4 from './../../global/assets/images/product-4@2x.png';
import hero from './../../global/assets/images/hero@2x.png';

import './ProductDetail.scss';

const images = [img1, img2, img3, img4, hero];

const sizes = [
  {
    id: 'xs',
    label: 'XS',
    disable: false,
  },
  {
    id: 's',
    label: 'S',
    disable: true,
  },
  {
    id: 'm',
    label: 'M',
    disable: true,
  },
  {
    id: 'l',
    label: 'L',
    disable: false,
  },
  {
    id: 'xl',
    label: 'XL',
    disable: false,
  },
];

const ProductDetail = () => {
  return (
    <div className="ProductDetail d-flex ">
      <ProductSlider slides={images} />
      <div className="ProductDetail-details">
        <div className="ProductDetail-details__title">Faux Leather Jacket</div>
        <div className="ProductDetail-details__price">&#8377; 1200.00</div>
        <div className="ProductDetail-details__description">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>
        <div className="ProductDetail-details__sizes">
          <div className="title">Size</div>
          {sizes.map(({ id, label, disable }) => (
            <span
              key={id}
              className={`size cursor-pointer ${!!disable ? 'disabled' : ''}`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="ProductDetail-details__quantity">
          <div className="title">Quantity</div>
          <Counter />
        </div>
        <Button
          iconName="cart"
          isBlack={false}
          isLeftAlign
          label="PROCEED"
          varient="secondary"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
