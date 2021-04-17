import React, { useState, useContext } from 'react';
import FirebaseContext from './../../context/firebase';

const Login = () => {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        console.log('authUser::: ', authUser);
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
    <div>
      <h3>Sign In page</h3>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      {!!errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
