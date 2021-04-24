import React, { useContext, useEffect, useState } from 'react';

import FirebaseContext from './../../context/firebase';

import Button from './../Button';
import Icon from './../../elements/Icon';

import './SideMenu.scss';

const SideMenu = ({
  isSideMenuOpen = false,
  userFirstName,
  handleCloseSideMenu,
}) => {
  const firebase = useContext(FirebaseContext);
  const [isOpen, setIsOpen] = useState(isSideMenuOpen);

  useEffect(() => {
    setIsOpen(isSideMenuOpen);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSideMenuOpen]);

  const handleCloseSideMenuClick = () => {
    setIsOpen(false);
    handleCloseSideMenu(false);
  };

  const handleSignOut = () => {
    firebase.doSignOut();
    handleCloseSideMenuClick();
  };

  return (
    <div
      className={`SideMenu d-flex flex-direction-col justify-content-between SideMenu-${
        !!isOpen ? 'open' : 'close'
      }`}
    >
      <div>
        <div className="SideMenu-top d-flex justify-content-between align-items-center">
          <Icon
            name="close"
            width="24"
            height="24"
            onClick={handleCloseSideMenuClick}
          />
          <span className="SideMenu-top__title">Little Tags</span>
        </div>
        {!!userFirstName && (
          <div className="SideMenu-user d-flex align-items-center">
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

export default SideMenu;
