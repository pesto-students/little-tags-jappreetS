import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';

import FirebaseContext from './../context/firebase';

const withAuthorization = (Component) => {
  const UpdatedComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const next = (authUser) => {};

    useEffect(() => {
      firebase.onAuthChangeListener(next);

      // eslint-disable-next-line
    }, []);

    return props.authUser ? (
      <Component {...props} />
    ) : (
      <p>You need to sign in to access this page</p>
    );
  };

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

  return connect(mapStateToProps)(UpdatedComponent);
};

export default withAuthorization;
