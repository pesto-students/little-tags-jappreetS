import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { PRODUCT_DETAIL, SELECT_ADDRESS } from '../../constants/routes';

import ProductListItem from './../../components/ProductListItem';
import PopularProducts from '../../components/PopularProducts';

import './PastOrders.scss';

const PastOrders = () => {
  const history = useHistory();
  const ordersList = useSelector((state) => state.orders.data);

  const orders = ordersList.map(({ cart, orderId }) => (
    <Fragment key={orderId}>
      {cart.map((cartItem) => (
        <ProductListItem
          key={cartItem.id}
          data={cartItem}
          showLeftPrice
          showOrderDate
          isPastOrder
          onImgClick={() => history.push(`${PRODUCT_DETAIL}/${cartItem.id}`)}
          onOrderAgainClick={() => history.push(SELECT_ADDRESS)}
        />
      ))}
    </Fragment>
  ));

  return (
    <div className="PastOrders">
      <h1 className="PastOrders-title text-align-center">My Past Orders</h1>
      <div className="PastOrders-itemsList">{orders}</div>
      <PopularProducts />
    </div>
  );
};

export default PastOrders;
