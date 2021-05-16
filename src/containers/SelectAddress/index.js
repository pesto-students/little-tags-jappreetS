import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ADD_ADDRESS, SELECT_PAYMENT_METHOD } from '../../constants/routes';
import { updateSelectedAddress } from '../../actions';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';
import Icon from '../../elements/Icon';

import './SelectAddress.scss';

const SelectAddress = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const addresses = useSelector((state) => state.addresses.data);
  const [selectedAddress, setSelectedAddress] = useState(
    !!addresses && addresses.length > 0 && addresses[selectedAddressIndex]
  );

  useEffect(() => {
    !!addresses &&
      addresses.length > 0 &&
      setSelectedAddress(addresses[selectedAddressIndex]);
  }, [addresses, selectedAddressIndex]);

  const handleChange = (event) => {
    const selectedAddressIndexValue = Number(event.target.value);
    setSelectedAddressIndex(selectedAddressIndexValue);
  };

  const handleProceed = () => {
    dispatch(updateSelectedAddress(selectedAddress));
    history.push(SELECT_PAYMENT_METHOD);
  };

  return (
    <div className="SelectAddress">
      <h1 className="SelectAddress-title text-align-center">Deliver To</h1>
      <div className="SelectAddress-addresses d-flex flex-direction-col align-items-center">
        {!!addresses &&
          addresses.length > 0 &&
          addresses.map((address, index) => (
            <RadioButton
              key={index}
              id={index}
              isSelected={selectedAddressIndex === index}
              label=""
              data={address}
              value={index}
              variant="secondary"
              onChange={handleChange}
            />
          ))}
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
      {!!addresses && addresses.length > 0 && (
        <Button
          isCenter
          label="PROCEED"
          varient="secondary"
          // onClick={() => history.push(SELECT_PAYMENT_METHOD)}
          onClick={handleProceed}
        />
      )}
    </div>
  );
};

export default SelectAddress;
