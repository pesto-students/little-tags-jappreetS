import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FirebaseContext from './../../context/firebase';
import { SIDE_MENU_OTHER_PAGES } from './../../constants';
import { PRODUCT_LIST } from './../../constants/routes';

import { updateSideMenuState } from './../../actions';

import Button from './../Button';
import Icon from './../../elements/Icon';

import './SideMenu.scss';

const SideMenu = (props) => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const isSideMenuOpen = useSelector(
    (state) => state.sideMenuState.isSideMenuOpen
  );
  const allCategories = useSelector((state) => state.allCategories.categories);
  const [isOpen, setIsOpen] = useState(isSideMenuOpen);
  const { userFirstName } = props;

  useEffect(() => {
    setIsOpen(isSideMenuOpen);
  }, [isSideMenuOpen]);

  const handleCloseSideMenuClick = () => {
    setIsOpen(false);
    dispatch(updateSideMenuState(false));
  };

  const handleSignOut = () => {
    firebase.doSignOut();
    handleCloseSideMenuClick();
  };

  const categories = allCategories.map((category) => (
    <li key={category}>
      <Link
        to={`${PRODUCT_LIST}/${category}`}
        onClick={handleCloseSideMenuClick}
      >
        {category}
      </Link>
    </li>
  ));

  const otherPages = SIDE_MENU_OTHER_PAGES.map(({ id, label, route }) => (
    <li key={id}>
      <Link to={route} onClick={handleCloseSideMenuClick}>
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
        <div className="SideMenu-top__menuItems">
          <div className="categoriesTitle">CATEGORIES</div>
          <ul className="categories">{categories}</ul>
          <ul className="other-pages">{otherPages}</ul>
        </div>
      </div>
      {!!userFirstName && (
        <Button
          isFullWidth
          label="LOGOUT"
          varient="ternary"
          onClick={handleSignOut}
        />
      )}
    </div>
  );
};

export default SideMenu;
