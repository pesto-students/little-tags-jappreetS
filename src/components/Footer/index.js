import React from 'react';

import { GITHUB_PROFILE, LINKEDIN_PROFILE } from './../../constants';

import Icon from './../../elements/Icon';

import './Footer.scss';

const Footer = () => {
  const handleIconClick = (targetName) => {
    switch (targetName) {
      case 'github':
        window.open(GITHUB_PROFILE, '_blank');
        return;
      case 'linkedin':
        window.open(LINKEDIN_PROFILE, '_blank');
        return;
      default:
        return;
    }
  };

  return (
    <div className="Footer d-flex justify-content-between">
      <div>
        Made with <span className="Footer-heart">&hearts;</span> by{' '}
        <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
          Jappreet
        </a>
      </div>
      <div>
        <Icon
          className="mr-16"
          isDefaultName
          name="github"
          width="24"
          height="24"
          onClick={() => handleIconClick('github')}
        />
        <Icon
          isDefaultName
          name="linkedin"
          width="24"
          height="24"
          onClick={() => handleIconClick('linkedin')}
        />
      </div>
    </div>
  );
};

export default Footer;
