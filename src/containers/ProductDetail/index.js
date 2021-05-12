import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CART } from '../../constants/routes';
import FirebaseContext from '../../context/firebase';

import { getUserDetails } from '../../utils/helpers';
import { getProductDetailByIdAction, updateCartAction } from '../../actions';

import Button from '../../components/Button';
import Counter from '../../components/Counter';
import ProductSlider from '../../components/ProductSlider';
import PopularProducts from '../../components/PopularProducts';

import './ProductDetail.scss';

const sizes = [
  {
    id: 'xs',
    label: 'XS',
    disable: false,
  },
  {
    id: 's',
    label: 'S',
    disable: true,
  },
  {
    id: 'm',
    label: 'M',
    disable: true,
  },
  {
    id: 'l',
    label: 'L',
    disable: false,
  },
  {
    id: 'xl',
    label: 'XL',
    disable: false,
  },
];

const ProductDetail = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const product = useSelector((state) => state.productDetail.product);
  const authUser = useSelector((state) => state.sessionState.authUser);
  const cart = useSelector((state) => state.cart.data);
  const [count, setCount] = useState(0);

  const { description, id, image, price, title } = !!product && product;

  const images = Array(5).fill(image);

  useEffect(() => {
    const currentProduct =
      !!cart && cart.find((item) => item.id === product.id);
    !!currentProduct && setCount(currentProduct.count);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    const pathnameArr = location.pathname.split('/');
    const productId = pathnameArr.slice(-1)[0];
    dispatch(getProductDetailByIdAction(productId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const handleCartUpdate = (count) => {
    setCount(count);
    const cartData = { id, image, price, title, count };
    const cartArr = [];

    count > 0 && cartArr.push(cartData);
    firebase.user(authUser.uid).set({
      ...(count > 0 && { cart: cartArr }),
      ...getUserDetails(authUser),
    });
    dispatch(updateCartAction(cartArr));
  };

  const handleSubmit = () => {
    history.push(CART);
  };

  return (
    <>
      {!!product ? (
        <div id={`product-${id}`} className="ProductDetail">
          <div className="d-flex">
            <ProductSlider slides={images} />
            <div className="ProductDetail-details">
              <div className="ProductDetail-details__title">{title}</div>
              <div className="ProductDetail-details__price">
                &#8377; {price}
              </div>
              <div className="ProductDetail-details__description">
                <p>{description}</p>
              </div>
              <div className="ProductDetail-details__sizes">
                <div className="title">Size</div>
                {sizes.map(({ id, label, disable }) => (
                  <span
                    key={id}
                    className={`size cursor-pointer ${
                      !!disable ? 'disabled' : ''
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="ProductDetail-details__quantity">
                <div className="title">Quantity</div>
                <Counter count={count} onCountChange={handleCartUpdate} />
              </div>
              <Button
                iconName={count > 0 ? 'cart' : ''}
                isBlack={false}
                isLeftAlign
                label="PROCEED"
                varient="secondary"
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="ProductDetail-popularProducts">
            <PopularProducts />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetail;
