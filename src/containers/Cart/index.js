import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { HOME, PRODUCT_DETAIL, SELECT_ADDRESS } from '../../constants/routes';

import Button from './../../components/Button';
import ProductListItem from './../../components/ProductListItem';

import './Cart.scss';

const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart.data);
  const isCartNotEmpty = !!cart && cart.length > 0;

  return (
    <div className="Cart">
      <h1 className="Cart-title text-align-center">My Cart</h1>
      <div className="Cart-itemsList">
        {isCartNotEmpty &&
          cart.map((product) => (
            <ProductListItem
              key={product.id}
              data={product}
              showCounter
              onImgClick={() => history.push(`${PRODUCT_DETAIL}/${product.id}`)}
            />
          ))}
      </div>
      {isCartNotEmpty && (
        <Button
          className="mb-16"
          isCenter
          label="PROCEED"
          varient="secondary"
          onClick={() => history.push(SELECT_ADDRESS)}
        />
      )}
      <Button
        isCenter
        label="CONTINUE SHOPPING"
        varient="secondary"
        onClick={() => history.push(HOME)}
      />
    </div>
  );
};

export default Cart;
