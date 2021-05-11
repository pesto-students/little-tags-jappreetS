import React from 'react';

import './RadioButton.scss';

const RadioButton = ({
  data,
  id,
  isSelected,
  label,
  value,
  variant = 'primary',
  showRadioButton = true,
  onChange,
}) => {
  const {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    phoneNumber,
    state,
    pinCode,
  } = !!data && data;
  return (
    <div className={`RadioButton ${variant} d-flex`}>
      {!!showRadioButton && (
        <div className={`RadioButton-inputContainer ${variant}`}>
          <input
            id={id}
            type="radio"
            checked={isSelected}
            value={value}
            onChange={onChange}
          />
          <label htmlFor={id} className="d-flex align-items-center">
            {label}
          </label>
        </div>
      )}
      {/* {variant === 'secondary' && (
        <div className="RadioButton-address">
          <div className="RadioButton-address__name">Ayush Jaiswal</div>
          <div className="RadioButton-address__address">
            1418 Riverwood Drive, Suite 3245 Cottonwood, DL 110092, India
          </div>
          <div className="RadioButton-address__phone">(+91) 9876 543 210</div>
        </div>
      )} */}
      {variant === 'secondary' && (
        <div className="RadioButton-address">
          <div className="RadioButton-address__name">
            {firstName} {lastName}
          </div>
          <div className="RadioButton-address__address">
            {addressLine1}, {addressLine2 ? `${addressLine2}, ` : ''} {state},{' '}
            {pinCode}
          </div>
          <div className="RadioButton-address__phone">{phoneNumber}</div>
        </div>
      )}
    </div>
  );
};

export default RadioButton;
