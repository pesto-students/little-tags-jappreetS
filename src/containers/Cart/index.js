import React from 'react';

import Button from './../../components/Button';
import ProductListItem from './../../components/ProductListItem';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="Cart">
      <h1 className="Cart-title text-align-center">My Cart</h1>
      <div className="Cart-itemsList">
        <ProductListItem showBorder={false} showCounter />
        <ProductListItem showBorder={false} showCounter />
      </div>
      <Button isCenter label="PROCEED" varient="secondary" onClick={() => {}} />
    </div>
  );
};

export default Cart;
