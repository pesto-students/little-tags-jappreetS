import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as ROUTES from './../constants/routes';

import { getAllCategoriesAction } from '../actions';

import withAuthentication from './../hoc/withAuthentication';

import AddAddress from './AddAddress';
import Cart from './Cart';
import Home from './Home';
import PastOrders from './PastOrders';
import PaymentMethod from './PaymentMethod';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import SelectAddress from './SelectAddress';
import SignIn from './SignIn';
import ThankYou from './ThankYou';
import WishList from './WishList';

import Footer from './../components/Footer';
import Header from './../components/Header';
import Loader from '../elements/Loader';

import './../global/styles/common.scss';

const App = () => {
  const dispatch = useDispatch();
  const loaderState = useSelector((state) => state.loaderState.data);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loaderState) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  }, [loaderState]);

  return (
    <>
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
          <Route path={`${ROUTES.CART}`}>
            <Cart />
          </Route>
          <Route path={`${ROUTES.SELECT_ADDRESS}`}>
            <SelectAddress />
          </Route>
          <Route path={ROUTES.ADD_ADDRESS}>
            <AddAddress />
          </Route>
          <Route path={ROUTES.SELECT_PAYMENT_METHOD}>
            <PaymentMethod />
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
      {loaderState && <Loader />}
    </>
  );
};

export default withAuthentication(App);
