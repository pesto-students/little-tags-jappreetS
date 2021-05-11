import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { setAuthUser, updateAddressList, updateCartAction } from './../actions';

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
      dispatch(updateCartAction(cart));
      dispatch(updateAddressList(addressList));
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
