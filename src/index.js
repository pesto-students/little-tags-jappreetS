import React from 'react';
import ReactDOM from 'react-dom';

import FirebaseContext from './context/firebase';
import Firebase from './classes/firebase';

import reportWebVitals from './reportWebVitals';

import App from './containers';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
