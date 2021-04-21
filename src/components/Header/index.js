import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { HOME, SIGN_IN } from './../../constants/routes';

import CustomLink from './../../elements/CustomLink';
import Icon from './../../elements/Icon';

import './Header.scss';

const Header = (props) => {
  const { authUser, isHome } = props;
  const [firstName, setFirstName] = useState('');
  const [isHeadingClick, setIsHeadingClick] = useState(false);

  useEffect(() => {
    if (!!authUser && !!authUser.displayName) {
      const { displayName } = authUser;
      setFirstName(displayName.split(' ')[0]);
    }
  }, [authUser]);

  return (
    <div
      className={`Header d-flex align-items-center justify-content-between color-${
        !!isHome ? 'white' : 'black'
      }`}
    >
      <div className="d-flex align-items-center">
        <Icon className="mr-16" name="hamburger" />
        <h1
          className="title cursor-pointer"
          onClick={() => setIsHeadingClick(true)}
        >
          Little Tags
        </h1>
      </div>
      {/* Search Bar */}
      <div className="Header-right d-flex align-items-center">
        {!!firstName ? (
          <>
            <Icon className="mr-16" isClickable={false} name="user" />
            <div className="Header-right__name">{firstName}</div>
          </>
        ) : (
          <CustomLink
            className="Header-right__link"
            label="Log in / Sign up"
            path={SIGN_IN}
          />
        )}
        <Icon className="ml-16" name="cart" />
      </div>
      {!!isHeadingClick && <Redirect to={HOME} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Header);
