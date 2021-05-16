import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { CART, HOME } from './../../constants/routes';
import FirebaseContext from './../../context/firebase';

import Button from './../Button';

import './SignInBox.scss';

const SignInBox = () => {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.additionalUserInfo.profile.given_name,
          displayName: authUser.user.displayName,
        });
        const lastVisitedRoute = sessionStorage.getItem('lastVisitedRoute');
        if (lastVisitedRoute === CART) {
          // UPDATE CART OF LOGGED IN USER
          history.push(CART);
        } else {
          history.push(HOME);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="SignInBox d-flex flex-direction-col align-items-center">
      <h2>Log in / Sign up</h2>
      <p className="SignInBox-info">Log in / Sign up using your</p>
      <Button
        altIcon="Google"
        iconName="google"
        isBlack={false}
        isFullWidth
        label="Google Account"
        varient="primary"
        onClick={handleGoogleSignIn}
      />
      {!!errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SignInBox;
