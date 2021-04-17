import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import FirebaseContext from './context/firebase';
import Firebase from './classes/firebase';
import store from './store';
import reportWebVitals from './reportWebVitals';

import App from './containers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
