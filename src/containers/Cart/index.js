import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { PRODUCT_DETAIL, SELECT_ADDRESS } from '../../constants/routes';

import Button from './../../components/Button';
import ProductListItem from './../../components/ProductListItem';

import './Cart.scss';

const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cartState.cart);

  return (
    <div className="Cart">
      <h1 className="Cart-title text-align-center">My Cart</h1>
      <div className="Cart-itemsList">
        {!!cart &&
          cart.length > 0 &&
          cart.map((product) => (
            <ProductListItem
              key={product.id}
              data={product}
              showBorder={false}
              showCounter
              onImgClick={() => history.push(`${PRODUCT_DETAIL}/${product.id}`)}
            />
          ))}
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
