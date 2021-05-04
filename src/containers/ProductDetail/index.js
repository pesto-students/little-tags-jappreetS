import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CART } from '../../constants/routes';

import { getProductDetailByIdAction } from '../../actions';

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
  const history = useHistory();

  const dispatch = useDispatch();
  const location = useLocation();
  const product = useSelector((state) => state.productDetail.product);

  const { description, image, price, title } = !!product && product;

  const images = Array(5).fill(image);

  useEffect(() => {
    const pathnameArr = location.pathname.split('/');
    const productId = pathnameArr.slice(-1)[0];
    dispatch(getProductDetailByIdAction(productId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      {!!product ? (
        <div className="ProductDetail">
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
                <Counter />
              </div>
              <Button
                iconName="cart"
                isBlack={false}
                isLeftAlign
                label="PROCEED"
                varient="secondary"
                onClick={() => history.push(CART)}
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
