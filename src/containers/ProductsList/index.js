import React from 'react';

import ProductListItem from './../../components/ProductListItem';
import Pagination from './../../components/Pagination';

import './ProductsList.scss';

const ProductsList = () => {
  return (
    <div className="ProductsList">
      <h1 className="ProductsList-title text-align-center">Products List</h1>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <Pagination currentPage={2} pageCount={6} />
    </div>
  );
};

export default ProductsList;
