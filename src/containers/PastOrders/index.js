import React from 'react';
import { useHistory } from 'react-router-dom';

import { PRODUCT_DETAIL, SELECT_ADDRESS } from '../../constants/routes';

import ProductListItem from './../../components/ProductListItem';
import PopularProducts from '../../components/PopularProducts';

import './PastOrders.scss';

const PastOrders = () => {
  const history = useHistory();

  return (
    <div className="PastOrders">
      <h1 className="PastOrders-title text-align-center">My Past Orders</h1>
      <div className="PastOrders-itemsList">
        <ProductListItem
          showBorder={false}
          showLeftPrice
          showOrderDate
          isPastOrder
          onImgClick={() => history.push(`${PRODUCT_DETAIL}/productId`)}
          onOrderAgainClick={() => history.push(SELECT_ADDRESS)}
        />
        <ProductListItem
          showBorder={false}
          showLeftPrice
          showOrderDate
          isPastOrder
          onImgClick={() => history.push(`${PRODUCT_DETAIL}/productId`)}
          onOrderAgainClick={() => history.push(SELECT_ADDRESS)}
        />
      </div>
      <PopularProducts />
    </div>
  );
};

export default PastOrders;
