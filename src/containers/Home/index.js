import React from 'react';

import Hero from './../../components/Hero';
import ProductCard from './../../components/ProductCard';

import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <section className="Home-mostInDemand">
        <div className="Home-mostInDemand__title text-align-center">
          Most in Demand
        </div>
        <div className="Home-mostInDemand__products d-flex">
          <div className="Home-mostInDemand__products-left">
            <ProductCard caption="T-shirt" name="product-1" variant="primary" />
            <ProductCard caption="Jeans" name="product-2" variant="primary" />
          </div>
          <div className="Home-mostInDemand__products-right d-flex">
            <ProductCard
              caption="Bagpack"
              name="product-3"
              variant="secondary"
            />
            <ProductCard
              caption="Charm necklace"
              name="product-4"
              variant="secondary"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
