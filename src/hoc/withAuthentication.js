import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import {
  setAuthUser,
  updateAddresses,
  updateCartAction,
  updateLoaderState,
  updateOrdersList,
  updateSelectedAddress,
} from './../actions';

import FirebaseContext from './../context/firebase';

const withAuthentication = (Component) => {
  const UpdatedComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    const dispatch = useDispatch();

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    };

    const next = (authUser) => {
      const { addresses, cart, orders, ...rest } = authUser;
      saveToLocalStorage(rest);
      dispatch(setAuthUser(rest));
      if (!!addresses && addresses.length > 0) {
        dispatch(updateAddresses(addresses));
        dispatch(updateSelectedAddress(addresses[0]));
      }
      !!cart && cart.length > 0 && dispatch(updateCartAction(cart));
      !!orders && orders.length > 0 && dispatch(updateOrdersList(orders));
      dispatch(updateLoaderState(false));
    };

    const fallback = () => {
      localStorage.removeItem('authUser');
      dispatch(setAuthUser(null));
      dispatch(updateLoaderState(false));
    };

    useEffect(() => {
      dispatch(updateLoaderState(true));
      const user = localStorage.getItem('authUser');
      dispatch(setAuthUser(user));
      firebase.onAuthChangeListener(next, fallback);
      // eslint-disable-next-line
    }, []);

    return <Component {...props} />;
  };

  return UpdatedComponent;
};

export default withAuthentication;
