import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CART, HOME, SIGN_IN } from './../../constants/routes';

import { updateSideMenuState } from './../../actions';

import SideMenu from './../SideMenu';

import CustomLink from './../../elements/CustomLink';
import Icon from './../../elements/Icon';

import './Header.scss';

const Header = (props) => {
  const { authUser, isHome, isSideMenuOpen, updateSideMenuState } = props;
  const history = useHistory();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (!!authUser && !!authUser.displayName) {
      const { displayName } = authUser;
      setFirstName(displayName.split(' ')[0]);
    } else {
      setFirstName('');
    }
  }, [authUser]);

  return (
    <div
      className={`Header d-flex align-items-center justify-content-between color-${
        !!isHome ? 'white' : 'black'
      }`}
    >
      <div className="Header-left d-flex align-items-center">
        <Icon
          className="mr-16"
          name="hamburger"
          width={32}
          height={32}
          onClick={() => updateSideMenuState(true)}
        />
        <div
          role="button"
          className="Header-left__title cursor-pointer"
          onClick={() => history.push(HOME)}
        >
          Little Tags
        </div>
      </div>
      {/* Search Bar */}
      <div className="Header-right d-flex align-items-center">
        {!!firstName ? (
          <>
            <Icon
              className="mr-16"
              isClickable={false}
              name="user"
              width={32}
              height={32}
            />
            <div className="Header-right__name">{firstName}</div>
          </>
        ) : (
          <CustomLink
            className="Header-right__link"
            label="Log in / Sign up"
            path={SIGN_IN}
          />
        )}
        <Icon
          className="ml-16"
          name="cart"
          width={32}
          height={32}
          onClick={() => history.push(CART)}
        />
      </div>
      <SideMenu userFirstName={!!firstName ? firstName : ''} />
      {!!isSideMenuOpen && <div className="overlay-dark" />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  isSideMenuOpen: state.sideMenuState.isSideMenuOpen,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateSideMenuState }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
