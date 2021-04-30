import React from 'react';

import Counter from './../Counter';

import productImg from './../../global/assets/images/hero@2x.png';

import './ProductListItem.scss';

const ProductListItem = ({ showBorder = true, showCounter = false }) => {
  return (
    <div
      className={`ProductListItem ${
        !!showBorder ? 'show-border' : ''
      } d-flex justify-content-between align-items-center`}
    >
      <div className="ProductListItem-left d-flex">
        <div className="ProductListItem-left__productImg">
          <img alt="Tshirt" className="cursor-pointer" src={productImg} />
        </div>
        <div className="ProductListItem-left__productName align-self-center">
          Faux Leather Jacket
          {!!showCounter && <Counter />}
        </div>
      </div>
      <div className="ProductListItem-right">
        <div className="ProductListItem-left__productPrice">
          &#8377; 1200.00
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
