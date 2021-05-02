import React from 'react';
import { useHistory } from 'react-router-dom';

import ProductListItem from './../../components/ProductListItem';
import Pagination from './../../components/Pagination';

import './ProductsList.scss';
import { PRODUCT_DETAIL } from '../../constants/routes';

const ProductsList = () => {
  const history = useHistory();

  const handleProductClick = () => {
    history.push(`${PRODUCT_DETAIL}/productId`);
  };

  return (
    <div className="ProductsList">
      <h1 className="ProductsList-title text-align-center">Products List</h1>
      <ProductListItem
        isCardClickable
        isImgClickable={false}
        onClick={handleProductClick}
      />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <Pagination currentPage={2} pageCount={6} />
    </div>
  );
};

export default ProductsList;
