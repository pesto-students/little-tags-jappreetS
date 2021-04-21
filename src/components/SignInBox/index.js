import React, { useState, useContext } from 'react';
import Button from '../Button';

import FirebaseContext from './../../context/firebase';

import './SignInBox.scss';

const SignInBox = () => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: getUserName(authUser.additionalUserInfo.profile),
          displayName: authUser.user.displayName,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const getUserName = (profileData) => {
    return `${profileData.given_name}_${profileData.family_name}`.toLowerCase();
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
