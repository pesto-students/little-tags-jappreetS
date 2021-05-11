import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SELECT_ADDRESS } from '../../constants/routes';
import { STATES } from '../../constants';
import FirebaseContext from '../../context/firebase';
import useFetchUserInfo from '../../hooks/useFetchUserInfo';
import { updateAddressList } from '../../actions';

import Button from './../../components/Button';
import Input from '../../elements/Input';
import Select from '../../elements/Select';

import './AddAddress.scss';

const AddAddress = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const authUser = useSelector((state) => state.sessionState.authUser);
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
  };

  const handleSubmit = async () => {
    const addressListData = [];
    addressListData.push(formData);
    if (!!userInfo) {
      firebase.user(authUser.uid).set({
        ...{ addressList: addressListData },
        ...userInfo,
      });
      dispatch(updateAddressList(addressListData));
    }
    history.push(SELECT_ADDRESS);
  };

  return (
    <div className="AddAddress">
      <h1 className="AddAddress-title text-align-center">Add Address</h1>
      <div className="AddAddress-form d-flex">
        <div className="AddAddress-form__left">
          <Input
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={handleChange}
          />
          <Input
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={handleChange}
          />
          <Input
            id="emailId"
            label="Email ID"
            value={emailId}
            onChange={handleChange}
          />
          <Input
            id="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="AddAddress-form__right">
          <Input
            id="addressLine1"
            label="Address Line 1"
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
            id="state"
            label="State"
            options={STATES}
            value={state}
            onChange={handleChange}
          />
          <Input
            id="pinCode"
            label="Pin Code"
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
