import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SELECT_ADDRESS } from '../../constants/routes';
import { STATES } from '../../constants';
import FirebaseContext from '../../context/firebase';
import useFetchUserInfo from '../../hooks/useFetchUserInfo';
import { updateAddresses } from '../../actions';
import { getUpdatedAddresses, isObjPropertiesEmpty } from '../../utils/helpers';

import Button from './../../components/Button';
import Input from '../../elements/Input';
import Select from '../../elements/Select';

import './AddAddress.scss';

const AddAddress = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const authUser = useSelector((state) => state.sessionState.authUser);
  const addresses = useSelector((state) => state.addresses.data);
  const { userInfo } = useFetchUserInfo();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    pinCode: '',
  });
  const [errorObj, setErrorObj] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    addressLine1: '',
    state: '',
    pinCode: '',
  });

  const {
    firstName,
    lastName,
    emailId,
    phoneNumber,
    addressLine1,
    addressLine2,
    state,
    pinCode,
  } = formData;

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    setErrorObj({
      ...errorObj,
      [key]: '',
    });
  };

  const validateForm = () => {
    const tempErrorObj = {
      firstName: '',
      lastName: '',
      emailId: '',
      phoneNumber: '',
      addressLine1: '',
      state: '',
      pinCode: '',
    };
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneNumberRegex = /^\d{10,10}$/;
    const pinCodeRegex = /^\d{6,6}$/;

    !firstName.trim() && (tempErrorObj.firstName = 'Enter First Name');
    !lastName.trim() && (tempErrorObj.lastName = 'Enter Last Name');
    !emailId.trim() && (tempErrorObj.emailId = 'Enter Email Id');
    !phoneNumber.trim() && (tempErrorObj.phoneNumber = 'Enter Phone Number');
    !addressLine1.trim() &&
      (tempErrorObj.addressLine1 = 'Enter Address Line 1');
    !state && (tempErrorObj.state = 'Select State');
    !pinCode.trim() && (tempErrorObj.pinCode = 'Enter Pincode');

    !!emailId &&
      !emailRegex.test(String(emailId).toLowerCase()) &&
      (tempErrorObj.emailId = 'Enter valid Email Id');
    !!phoneNumber &&
      !phoneNumberRegex.test(phoneNumber) &&
      (tempErrorObj.phoneNumber = 'Enter valid Phone Number');
    !!pinCode &&
      !pinCodeRegex.test(pinCode) &&
      (tempErrorObj.pinCode = 'Enter valid Pincode');

    const isFormValid = isObjPropertiesEmpty(tempErrorObj);

    setErrorObj({ ...errorObj, ...tempErrorObj });
    return isFormValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const addressesArr = getUpdatedAddresses(addresses, formData);
      if (!!userInfo) {
        firebase.user(authUser.uid).set({
          ...userInfo,
          addresses: addressesArr,
        });
        dispatch(updateAddresses(addressesArr));
      }
      history.push(SELECT_ADDRESS);
    }
  };

  return (
    <div className="AddAddress">
      <h1 className="AddAddress-title text-align-center">Add Address</h1>
      <div className="AddAddress-form d-flex">
        <div className="AddAddress-form__left">
          <Input
            errorMessage={errorObj.firstName}
            id="firstName"
            label="First Name*"
            value={firstName}
            onChange={handleChange}
          />
          <Input
            errorMessage={errorObj.lastName}
            id="lastName"
            label="Last Name*"
            value={lastName}
            onChange={handleChange}
          />
          <Input
            errorMessage={errorObj.emailId}
            id="emailId"
            label="Email ID*"
            value={emailId}
            onChange={handleChange}
          />
          <Input
            errorMessage={errorObj.phoneNumber}
            id="phoneNumber"
            label="Phone Number*"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="AddAddress-form__right">
          <Input
            errorMessage={errorObj.addressLine1}
            id="addressLine1"
            label="Address Line 1*"
            value={addressLine1}
            onChange={handleChange}
          />
          <Input
            id="addressLine2"
            label="Address Line 2"
            value={addressLine2}
            onChange={handleChange}
          />
          <Select
            errorMessage={errorObj.state}
            id="state"
            label="State*"
            options={STATES}
            value={state}
            onChange={handleChange}
          />
          <Input
            errorMessage={errorObj.pinCode}
            id="pinCode"
            label="Pin Code*"
            value={pinCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        isCenter
        label="ADD INFORMATIONS"
        varient="secondary"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default AddAddress;
