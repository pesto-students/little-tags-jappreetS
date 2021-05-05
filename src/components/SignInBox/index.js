import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { HOME } from './../../constants/routes';
import FirebaseContext from './../../context/firebase';

import Button from './../Button';

import './SignInBox.scss';

const SignInBox = () => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.additionalUserInfo.profile.given_name,
          displayName: authUser.user.displayName,
        });
        setIsLogin(true);
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
      {!!isLogin && <Redirect to={HOME} />}
    </div>
  );
};

export default SignInBox;
