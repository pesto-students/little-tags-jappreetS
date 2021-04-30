import React from 'react';

import ProductListItem from './../../components/ProductListItem';

import './ProductsList.scss';

const ProductsList = () => {
  return (
    <div className="ProductsList">
      <h2 className="ProductsList-title text-align-center">Products List</h2>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </div>
  );
};

export default ProductsList;
