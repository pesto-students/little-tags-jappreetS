import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { CART } from '../../constants/routes';
import FirebaseContext from '../../context/firebase';

import { updateCartAction } from '../../actions';
import useFetchUserInfo from '../../hooks/useFetchUserInfo';
import { getUpdatedCart } from '../../utils/helpers';

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
  const { count, id, image, price, title } = !!data && data;
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const location = useLocation();
  const { userInfo } = useFetchUserInfo();
  const [productCount, setProductCount] = useState(count);
  const authUser = useSelector((state) => state.sessionState.authUser);
  const cart = useSelector((state) => state.cart.data);
  const isCart = location.pathname.includes(CART);

  const handleCartUpdate = (count) => {
    setProductCount(count);
    const cartData = { id, image, price, title, count };

    const cartArr = getUpdatedCart(cart, cartData);
    if (!!userInfo) {
      firebase.user(authUser.uid).set({
        ...userInfo,
        cart: cartArr,
      });
    }
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
            <Counter
              count={productCount}
              isCart={isCart}
              onCountChange={handleCartUpdate}
            />
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
            &#8377; {isCart ? price * productCount : price}
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
