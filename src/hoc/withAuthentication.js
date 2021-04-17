import React, { useEffect, useContext } from 'react';

import FirebaseContext from './../context/firebase';

const withAuthentication = (Component) => {
  const UpdatedComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    };

    useEffect(() => {
      firebase.onAuthChangeListener(saveToLocalStorage);
    }, []);

    return <Component {...props} />;
  };

  return UpdatedComponent;
};

export default withAuthentication;
