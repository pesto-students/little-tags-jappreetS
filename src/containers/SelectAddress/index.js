import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { ADD_ADDRESS, THANK_YOU } from '../../constants/routes';

import Button from '../../components/Button';
import Icon from '../../elements/Icon';
import RadioButton from '../../elements/RadioButton';

import './SelectAddress.scss';

const SelectAddress = () => {
  const history = useHistory();
  const [selectedAddress, setSelectedAddress] = useState('1');

  const handleChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div className="SelectAddress">
      <h1 className="SelectAddress-title text-align-center">Deliver To</h1>
      <div className="SelectAddress-addressList d-flex flex-direction-col align-items-center">
        <RadioButton
          id="1"
          isSelected={selectedAddress === '1'}
          label=""
          value="1"
          onChange={handleChange}
        />
        <RadioButton
          id="2"
          isSelected={selectedAddress === '2'}
          label=""
          value="2"
          onChange={handleChange}
        />
      </div>
      <div
        role="button"
        className="SelectAddress-addAddress d-flex justify-content-center align-items-center cursor-pointer"
        onClick={() => history.push(ADD_ADDRESS)}
      >
        <Icon
          className="mr-16"
          isDefaultName
          name="plus-circle"
          width="24"
          height="24"
        />
        ADD NEW ADDRESS
      </div>
      <Button
        isCenter
        label="PROCEED"
        varient="secondary"
        onClick={() => history.push(THANK_YOU)}
      />
    </div>
  );
};

export default SelectAddress;
