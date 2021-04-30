import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as ROUTES from './../constants/routes';

import withAuthentication from './../hoc/withAuthentication';

import Cart from './Cart';
import Home from './Home';
import ProductsList from './ProductsList';
import SignIn from './SignIn';
import WishList from './WishList';

import Footer from './../components/Footer';
import Header from './../components/Header';

import './../global/styles/common.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route path={ROUTES.WISH_LIST}>
            <WishList />
          </Route>
          <Route path={`${ROUTES.PRODUCT_LIST}/:id`}>
            <ProductsList />
          </Route>
          <Route path={`${ROUTES.CART}`}>
            <Cart />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withAuthentication(App);
