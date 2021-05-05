import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CART, HOME, SIGN_IN } from './../../constants/routes';

import { updateSideMenuState } from './../../actions';

import SideMenu from './../SideMenu';

import CustomLink from './../../elements/CustomLink';
import Icon from './../../elements/Icon';

import './Header.scss';

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cartState.cart);
  const authUser = useSelector((state) => state.sessionState.authUser);
  const isSideMenuOpen = useSelector(
    (state) => state.sideMenuState.isSideMenuOpen
  );
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
    <div className="Header d-flex align-items-center justify-content-between">
      <div className="Header-left d-flex align-items-center">
        <Icon
          className="mr-16"
          name="hamburger"
          width={32}
          height={32}
          onClick={() => dispatch(updateSideMenuState(true))}
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
        <div className="Header-right__cartIcon">
          <Icon
            className="ml-16"
            name="cart"
            width={32}
            height={32}
            onClick={() => history.push(CART)}
          />
          {!!cart && cart.length > 0 && (
            <div className="count d-flex justify-content-center align-items-center">
              {cart.length}
            </div>
          )}
        </div>
      </div>
      <SideMenu userFirstName={!!firstName ? firstName : ''} />
      {!!isSideMenuOpen && <div className="overlay-dark" />}
    </div>
  );
};

export default Header;
