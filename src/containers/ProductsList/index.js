import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PRODUCT_DETAIL } from '../../constants/routes';

import { getProductsByCategoryIdAction } from './../../actions';

import ProductListItem from './../../components/ProductListItem';
import Pagination from './../../components/Pagination';

import './ProductsList.scss';

const ProductsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const products = useSelector((state) => state.productsList.products);

  useEffect(() => {
    const pathnameArr = location.pathname.split('/');
    const categoryId = pathnameArr.slice(-1)[0];
    dispatch(getProductsByCategoryIdAction(categoryId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleProductClick = () => {
    history.push(`${PRODUCT_DETAIL}/productId`);
  };

  return (
    <div className="ProductsList">
      <h1 className="ProductsList-title text-align-center">Products List</h1>
      {!!products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductListItem
            key={product.id}
            data={product}
            isCardClickable
            isImgClickable={false}
            onClick={handleProductClick}
          />
        ))}
      <Pagination currentPage={2} pageCount={6} />
    </div>
  );
};

export default ProductsList;
