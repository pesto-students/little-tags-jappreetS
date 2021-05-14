import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PRODUCT_SIZES } from '../../constants';
import { CART } from '../../constants/routes';
import FirebaseContext from '../../context/firebase';

import { getUpdatedCart } from '../../utils/helpers';
import { getProductDetailByIdAction, updateCartAction } from '../../actions';
import useFetchUserInfo from '../../hooks/useFetchUserInfo';

import Button from '../../components/Button';
import Counter from '../../components/Counter';
import ProductSlider from '../../components/ProductSlider';
import PopularProducts from '../../components/PopularProducts';
import ErrorMessage from '../../elements/ErrorMessage';

import './ProductDetail.scss';

const ProductDetail = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const authUser = useSelector((state) => state.sessionState.authUser);
  const cart = useSelector((state) => state.cart.data);
  const product = useSelector((state) => state.productDetail.product);
  const { userInfo } = useFetchUserInfo();
  const [count, setCount] = useState(0);
  const [showCountErrorMessage, setShowCountErrorMessage] = useState(false);
  const [selectedSize, setSelectedSize] = useState(PRODUCT_SIZES[2].id);

  const { category, description, id, image, price, title } =
    !!product && product;
  const images = Array(5).fill(image);
  const showProductSizes =
    category === "men's clothing" || category === "women's clothing";

  useEffect(() => {
    const currentProduct =
      !!cart && !!product && cart.find((item) => item.id === product.id);
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
    showCountErrorMessage && setShowCountErrorMessage(false);
    const cartData = { id, image, price, title, count };
    const cartArr = getUpdatedCart(cart, cartData);
    if (!!userInfo) {
      firebase.user(authUser.uid).set({
        ...userInfo,
        cart: cartArr,
      });
      dispatch(updateCartAction(cartArr));
    }
  };

  const handleProductSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleSubmit = () => {
    if (!!cart && cart.length > 0) {
      history.push(CART);
    } else {
      setShowCountErrorMessage(true);
    }
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
              {showProductSizes && (
                <div className="ProductDetail-details__sizes">
                  <div className="title">Size</div>
                  {PRODUCT_SIZES.map(({ id, label, disable }) => (
                    <span
                      key={id}
                      className={`size cursor-pointer ${
                        selectedSize === id ? 'highlight-size' : ''
                      } ${!!disable ? 'disabled' : ''}`}
                      onClick={() => handleProductSizeClick(id)}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
              <div className="ProductDetail-details__quantity">
                <div className="title">Quantity</div>
                <Counter count={count} onCountChange={handleCartUpdate} />
                {showCountErrorMessage && (
                  <ErrorMessage message="Add atleast 1 product" />
                )}
              </div>
              <Button
                iconName="cart"
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
