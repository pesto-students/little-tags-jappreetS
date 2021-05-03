import React from 'react';

import './Select.scss';

const Select = ({ label }) => {
  return (
    <div className="Select d-flex flex-direction-col">
      <label className="Select-label">{label}</label>
      <select className="Select-selectArea cursor-pointer">
        <option value="" disabled selected>
          State
        </option>
        <option value="delhi">Delhi</option>
        <option value="karnataka">Karnataka</option>
        <option value="maharashtra">Maharashtra</option>
        <option value="rajasthank">Rajasthan</option>
      </select>
    </div>
  );
};

export default Select;
