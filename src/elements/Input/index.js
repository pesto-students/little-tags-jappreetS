import React from 'react';

import './Input.scss';

const Input = ({ label, type = 'text', value, onChange = () => {} }) => {
  return (
    <div className="Input d-flex flex-direction-col">
      <label className="Input-label">{label}</label>
      <input
        className="Input-inputArea"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
