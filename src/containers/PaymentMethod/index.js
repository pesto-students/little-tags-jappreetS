import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { THANK_YOU } from '../../constants/routes';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import './PaymentMethod.scss';

const PaymentMethod = () => {
  const history = useHistory();
  const selectedAddress = useSelector((state) => state.selectedAddress.address);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('1');

  const handleChange = (event) => {
    setSelectedPaymentMode(event.target.value);
  };

  return (
    <div className="PaymentMethod">
      <h1 className="PaymentMethod-title text-align-center">Delivering To</h1>
      <div className="PaymentMethod-selectedAddress d-flex flex-direction-col align-items-center">
        <RadioButton
          data={selectedAddress}
          showRadioButton={false}
          variant="secondary"
          onChange={handleChange}
        />
      </div>
      <div className="PaymentMethod-paymentMethods d-flex flex-direction-col align-items-center">
        <div className="PaymentMethod-paymentMethods__title">
          Method of payment
        </div>
        <div className="PaymentMethod-paymentMethods__options">
          <RadioButton
            id="1"
            isSelected={selectedPaymentMode === '1'}
            label="Razor Pay"
            value="1"
            onChange={handleChange}
          />
          <RadioButton
            id="2"
            isSelected={selectedPaymentMode === '2'}
            label="Visa /  Mastercard / UPI"
            value="2"
            onChange={handleChange}
          />
          <RadioButton
            id="3"
            isSelected={selectedPaymentMode === '3'}
            label="Pay Pal"
            value="3"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        isCenter
        label="PROCEED TO PAYMENT"
        varient="secondary"
        onClick={() => history.push(THANK_YOU)}
      />
    </div>
  );
};

export default PaymentMethod;
