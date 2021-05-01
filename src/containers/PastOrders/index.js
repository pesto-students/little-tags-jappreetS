import React from 'react';

import ProductListItem from './../../components/ProductListItem';

import './PastOrders.scss';

const PastOrders = () => {
  return (
    <div className="PastOrders">
      <h1 className="PastOrders-title text-align-center">My Past Orders</h1>
      <div className="PastOrders-itemsList">
        <ProductListItem
          showBorder={false}
          showLeftPrice
          showOrderDate
          isPastOrder
        />
        <ProductListItem
          showBorder={false}
          showLeftPrice
          showOrderDate
          isPastOrder
        />
      </div>
    </div>
  );
};

export default PastOrders;
