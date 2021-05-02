import React from 'react';

import ProductCard from '../ProductCard';

import './PopularProducts.scss';

const PopularProducts = () => {
  return (
    <div className="PopularProducts">
      <div className="PopularProducts-title text-align-center">
        More you'll like
      </div>
      <div className="PopularProducts-products d-flex justify-content-between">
        <ProductCard caption="T-shirt" name="product-1" variant="ternary" />
        <ProductCard caption="T-shirt" name="product-1" variant="ternary" />
        <ProductCard caption="T-shirt" name="product-1" variant="ternary" />
        <ProductCard caption="T-shirt" name="product-1" variant="ternary" />
      </div>
    </div>
  );
};

export default PopularProducts;
