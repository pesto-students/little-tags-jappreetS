import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { HOME, SIGN_IN } from './../../constants/routes';

import CustomLink from './../../elements/CustomLink';
import Icon from './../../elements/Icon';

import './Header.scss';

const Header = ({ isHome }) => {
  const [isHeaderClick, setHeaderClick] = useState(false);

  return (
    <div
      className={`Header d-flex align-items-center justify-content-between color-${
        !!isHome ? 'white' : 'black'
      }`}
    >
      <div className="d-flex align-items-center">
        <Icon name="hamburger" className="mr-16" />
        <h1
          className="title cursor-pointer"
          onClick={() => setHeaderClick(true)}
        >
          Little Tags
        </h1>
      </div>
      {/* Search Bar */}
      <CustomLink label="Log in / Sign up" path={SIGN_IN} />
      {!!isHeaderClick && <Redirect to={HOME} />}
    </div>
  );
};

export default Header;
