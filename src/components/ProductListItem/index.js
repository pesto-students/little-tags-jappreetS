import React from 'react';

import Button from './../Button';
import Counter from './../Counter';

import productImg from './../../global/assets/images/hero@2x.png';

import './ProductListItem.scss';

const ProductListItem = ({
  showBorder = true,
  showCounter = false,
  showLeftPrice = false,
  showOrderDate = false,
  isPastOrder = false,
}) => {
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
        <div className="ProductListItem-left__productInfo align-self-center">
          <div
            className={`name ${
              !!showCounter || !!showLeftPrice ? 'add-margin' : ''
            }`}
          >
            Faux Leather Jacket
          </div>
          {!!showCounter && <Counter />}
          {!!showLeftPrice && <div className="price">&#8377; 1200.00</div>}
          {!!showOrderDate && (
            <div className="order-date">2 September 2020</div>
          )}
        </div>
      </div>
      <div className="ProductListItem-right">
        {!showLeftPrice && (
          <div className="ProductListItem-right__productPrice">
            &#8377; 1200.00
          </div>
        )}
        {!!isPastOrder && (
          <Button label="ORDER AGAIN" varient="secondary" onClick={() => {}} />
        )}
      </div>
    </div>
  );
};

export default ProductListItem;
