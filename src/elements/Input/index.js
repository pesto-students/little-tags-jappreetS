import React from 'react';

import './Input.scss';

const Input = ({ id, label, type = 'text', value, onChange = () => {} }) => {
  return (
    <div className="Input d-flex flex-direction-col">
      <label className="Input-label">{label}</label>
      <input
        className="Input-inputArea"
        type={type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
      />
    </div>
  );
};

export default Input;
