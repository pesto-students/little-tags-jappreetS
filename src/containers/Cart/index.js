import React from 'react';
import { useHistory } from 'react-router-dom';

import { PRODUCT_DETAIL, SELECT_ADDRESS } from '../../constants/routes';

import Button from './../../components/Button';
import ProductListItem from './../../components/ProductListItem';

import './Cart.scss';

const Cart = () => {
  const history = useHistory();

  return (
    <div className="Cart">
      <h1 className="Cart-title text-align-center">My Cart</h1>
      <div className="Cart-itemsList">
        <ProductListItem
          showBorder={false}
          showCounter
          onImgClick={() => history.push(`${PRODUCT_DETAIL}/productId`)}
        />
        <ProductListItem
          showBorder={false}
          showCounter
          onImgClick={() => history.push(`${PRODUCT_DETAIL}/productId`)}
        />
      </div>
      <Button
        isCenter
        label="PROCEED"
        varient="secondary"
        onClick={() => history.push(SELECT_ADDRESS)}
      />
    </div>
  );
};

export default Cart;
