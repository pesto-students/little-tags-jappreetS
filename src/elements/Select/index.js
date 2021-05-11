import React from 'react';

import './Select.scss';

const Select = ({ id, label, options, value, onChange }) => {
  return (
    <div className="Select d-flex flex-direction-col">
      <label className="Select-label">{label}</label>
      <select
        className="Select-selectArea cursor-pointer"
        defaultValue={value}
        onChange={(event) => onChange(id, event.target.value)}
      >
        <option value="" disabled>
          State
        </option>
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
