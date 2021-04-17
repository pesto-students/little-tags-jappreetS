import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as ROUTES from './../constants/routes';

import withAuthentication from './../hoc/withAuthentication';
import Home from './Home';
import WishList from './WishList';

import Footer from './../components/Footer';
import Header from './../components/Header';
import Navigation from './../components/Navigation';
import SignIn from './../components/SignIn';

const App = () => {
  return (
    <div>
      <Header />
      <h1>LITTLE TAGS</h1>
      <BrowserRouter>
        <Navigation />
        <hr />
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
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default withAuthentication(App);
