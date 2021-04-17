import React from 'react';

import withAuthentication from './../hoc/withAuthentication';

import Login from './../components/Login';

const App = () => {
  return (
    <div>
      <h1>LITTLE TAGS</h1>
      <Login />
    </div>
  );
};

export default withAuthentication(App);
