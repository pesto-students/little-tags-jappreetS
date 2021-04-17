import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './../../constants/routes';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.WISH_LIST}>Wish List</Link>
      </li>
    </ul>
  );
};

export default Navigation;
