import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSideMenuState } from './../../actions';

import FirebaseContext from './../../context/firebase';
import { CATEGORIES } from './../../constants';
import { PRODUCT_LIST } from './../../constants/routes';

import Button from './../Button';
import Icon from './../../elements/Icon';

import './SideMenu.scss';

const SideMenu = (props) => {
  const { userFirstName, isSideMenuOpen, updateSideMenuState } = props;
  const firebase = useContext(FirebaseContext);
  const [isOpen, setIsOpen] = useState(isSideMenuOpen);

  useEffect(() => {
    setIsOpen(isSideMenuOpen);
  }, [isSideMenuOpen]);

  const handleCloseSideMenuClick = () => {
    setIsOpen(false);
    updateSideMenuState(false);
  };

  const handleSignOut = () => {
    firebase.doSignOut();
    handleCloseSideMenuClick();
  };

  const categories = CATEGORIES.map(({ id, label }) => (
    <li key={id}>
      <Link to={`${PRODUCT_LIST}/${id}`} onClick={handleCloseSideMenuClick}>
        {label}
      </Link>
    </li>
  ));

  return (
    <div
      className={`SideMenu d-flex flex-direction-col justify-content-between SideMenu-${
        !!isOpen ? 'open' : 'close'
      }`}
    >
      <div className="SideMenu-top">
        <div className="SideMenu-top__title d-flex justify-content-between align-items-center">
          <Icon
            name="close"
            width="24"
            height="24"
            onClick={handleCloseSideMenuClick}
          />
          <span className="title">Little Tags</span>
        </div>
        {!!userFirstName && (
          <div className="SideMenu-top__user d-flex align-items-center">
            <Icon
              className="mr-16"
              name="user"
              isBlack={false}
              width="24px"
              height="24px"
            />
            <span>Hey, {userFirstName}</span>
          </div>
        )}
        <div className="SideMenu-top__categories">
          <div className="categoriesTitle">CATEGORIES</div>
          <ul className="categories">{categories}</ul>
        </div>
      </div>
      {!!userFirstName && (
        <Button
          isFullWidth
          label="Logout"
          varient="ternary"
          onClick={handleSignOut}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isSideMenuOpen: state.sideMenuSate.isSideMenuOpen,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateSideMenuState }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
