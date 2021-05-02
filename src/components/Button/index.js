import React from 'react';

import Icon from './../../elements/Icon';

import './Button.scss';

const Button = ({
  className,
  iconName,
  isBlack = true,
  isCenter = false,
  isFullWidth = false,
  label,
  varient = 'primary',
  onClick,
}) => {
  return (
    <button
      className={`Button cursor-pointer d-flex align-items-center justify-content-center Button-${varient} Button-width-${
        !!isFullWidth ? 'full' : 'limit'
      } ${!!isCenter ? 'Button-isCenter' : ''} ${!!className ? className : ''}`}
      onClick={onClick}
    >
      {!!iconName && (
        <Icon isBlack={isBlack} name={iconName} className="mr-16" />
      )}
      {label}
    </button>
  );
};

export default Button;
