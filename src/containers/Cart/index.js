import React from 'react';

import ProductListItem from '../../components/ProductListItem';
// import Pagination from '../../components/Pagination';

import './Cart.scss';

const Cart = () => {
  return (
    <div className="Cart">
      <h2 className="Cart-title text-align-center">My Cart</h2>
      <ProductListItem showBorder={false} showCounter />
      <ProductListItem showBorder={false} showCounter />
    </div>
  );
};

export default Cart;
