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
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
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
