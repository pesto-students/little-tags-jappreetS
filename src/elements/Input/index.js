import React from 'react';

import ErrorMessage from '../../elements/ErrorMessage';

import './Input.scss';

const Input = ({
  errorMessage,
  id,
  label,
  type = 'text',
  value,
  onChange = () => {},
}) => {
  return (
    <div className="Input d-flex flex-direction-col">
      <label className="Input-label">{label}</label>
      <input
        className="Input-inputArea"
        type={type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
      />
      {!!errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;
