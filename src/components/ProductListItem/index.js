import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FirebaseContext from '../../context/firebase';

import { getUserDetails } from '../../utils/helpers';
import { updateCartAction } from '../../actions';

import Button from './../Button';
import Counter from './../Counter';

import './ProductListItem.scss';

const ProductListItem = ({
  data,
  showBorder = true,
  showCounter = false,
  showLeftPrice = false,
  showOrderDate = false,
  isPastOrder = false,
  isCardClickable = false,
  isImgClickable = true,
  onClick = () => {},
  onImgClick = () => {},
  onOrderAgainClick = () => {},
}) => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const { count, id, image, price, title } = !!data && data;
  const [productCount, setProductCount] = useState(count);
  const authUser = useSelector((state) => state.sessionState.authUser);

  const handleCartUpdate = (count) => {
    setProductCount(count);
    const cartData = { id, image, price, title, count };
    const cartArr = [];

    cartArr.push(cartData);
    firebase.user(authUser.uid).set({
      cart: cartArr,
      ...getUserDetails(authUser),
    });
    dispatch(updateCartAction(cartArr));
  };

  return (
    <div
      id={id}
      className={`ProductListItem ${!!showBorder ? 'show-border' : ''} ${
        !!isCardClickable ? 'cursor-pointer' : ''
      } d-flex justify-content-between align-items-center`}
      onClick={onClick}
    >
      <div className="ProductListItem-left d-flex">
        <div className="ProductListItem-left__productImg">
          <img
            alt="Tshirt"
            className={`${isImgClickable ? 'cursor-pointer' : ''}`}
            src={image}
            onClick={onImgClick}
          />
        </div>
        <div className="ProductListItem-left__productInfo align-self-center">
          <div
            className={`name ${
              !!showCounter || !!showLeftPrice ? 'add-margin' : ''
            }`}
          >
            {title}
          </div>
          {!!showCounter && (
            <Counter count={productCount} onCountChange={handleCartUpdate} />
          )}
          {!!showLeftPrice && <div className="price">&#8377; {price}</div>}
          {!!showOrderDate && (
            <div className="order-date">2 September 2020</div>
          )}
        </div>
      </div>
      <div className="ProductListItem-right">
        {!showLeftPrice && (
          <div className="ProductListItem-right__productPrice">
            &#8377; {price * productCount}
          </div>
        )}
        {!!isPastOrder && (
          <Button
            label="ORDER AGAIN"
            varient="secondary"
            onClick={onOrderAgainClick}
          />
        )}
      </div>
    </div>
  );
};

export default ProductListItem;
