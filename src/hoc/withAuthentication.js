import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from './../actions';

import FirebaseContext from './../context/firebase';

const withAuthentication = (Component) => {
  const UpdatedComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    };

    const next = (authUser) => {
      saveToLocalStorage(authUser);
      props.setAuthUser(authUser);
    };

    useEffect(() => {
      const user = localStorage.getItem('authUser');
      props.setAuthUser(user);
      firebase.onAuthChangeListener(next);

      // eslint-disable-next-line
    }, []);

    return <Component {...props} />;
  };

  return connect(null, { setAuthUser })(UpdatedComponent);
};

export default withAuthentication;
