import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as ROUTES from './../constants/routes';

import withAuthentication from './../hoc/withAuthentication';

import AddAddress from './AddAddress';
import Cart from './Cart';
import Home from './Home';
import PastOrders from './PastOrders';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import SelectAddress from './SelectAddress';
import SignIn from './SignIn';
import ThankYou from './ThankYou';
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
          <Route path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
          <Route path={ROUTES.WISH_LIST}>
            <WishList />
          </Route>
          <Route path={`${ROUTES.PRODUCT_LIST}/:id`}>
            <ProductsList />
          </Route>
          <Route path={`${ROUTES.PRODUCT_DETAIL}/:id`}>
            <ProductDetail />
          </Route>
          <Route path={`${ROUTES.SELECT_ADDRESS}`}>
            <SelectAddress />
          </Route>
          <Route path={`${ROUTES.CART}`}>
            <Cart />
          </Route>
          <Route path={ROUTES.ADD_ADDRESS}>
            <AddAddress />
          </Route>
          <Route path={ROUTES.PAST_ORDERS}>
            <PastOrders />
          </Route>
          <Route path={ROUTES.THANK_YOU}>
            <ThankYou />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withAuthentication(App);
