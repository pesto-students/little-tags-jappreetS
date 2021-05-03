import React from 'react';

import Button from './../../components/Button';
import Input from '../../elements/Input';
import Select from '../../elements/Select';

import './AddAddress.scss';

const AddAddress = () => {
  return (
    <div className="AddAddress">
      <h1 className="AddAddress-title text-align-center">Add Address</h1>
      <div className="AddAddress-form d-flex">
        <div className="AddAddress-form__left">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email ID" />
          <Input label="Phone Number" />
        </div>
        <div className="AddAddress-form__right">
          <Input label="Address Line 1" />
          <Input label="Address Line 2" />
          <Select label="State" />
          <Input label="Pin Code" />
        </div>
      </div>
      <Button
        isCenter
        label="ADD INFORMATIONS"
        varient="secondary"
        onClick={() => {}}
      />
    </div>
  );
};

export default AddAddress;
