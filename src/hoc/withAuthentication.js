import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import {
  setAuthUser,
  updateAddressList,
  updateCartAction,
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
      const { cart, addressList, ...rest } = authUser;
      saveToLocalStorage(rest);
      dispatch(setAuthUser(rest));
      !!cart && cart.length > 0 && dispatch(updateCartAction(cart));
      if (!!addressList && addressList.length > 0) {
        dispatch(updateAddressList(addressList));
        dispatch(updateSelectedAddress(addressList[0]));
      }
    };

    const fallback = () => {
      localStorage.removeItem('authUser');
      dispatch(setAuthUser(null));
    };

    useEffect(() => {
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
