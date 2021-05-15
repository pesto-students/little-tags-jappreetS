import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateOrdersList, updateCartAction } from '../../actions';
import { THANK_YOU } from '../../constants/routes';
import FirebaseContext from '../../context/firebase';
import useFetchOrdersCount from '../../hooks/useFetchOrdersCount';
import useFetchUserInfo from '../../hooks/useFetchUserInfo';
import { getUpdatedOrders } from '../../utils/helpers';

import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

import './PaymentMethod.scss';

const PaymentMethod = () => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart.data);
  const selectedAddress = useSelector((state) => state.selectedAddress.address);
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('1');
  const authUser = useSelector((state) => state.sessionState.authUser);
  const orders = useSelector((state) => state.ordersList.data);
  let { ordersCount } = useFetchOrdersCount();
  const { userInfo } = useFetchUserInfo();

  const handleChange = (event) => {
    setSelectedPaymentMode(event.target.value);
  };

  const handleSubmit = async () => {
    const updatedOrderCount = ++ordersCount;
    const orderDetails = {
      orderId: updatedOrderCount,
      cart,
      address: selectedAddress,
    };
    const ordersArr = getUpdatedOrders(orders, orderDetails);
    if (!!userInfo) {
      firebase.user(authUser.uid).set({
        ...userInfo,
        cart: [],
        orders: ordersArr,
      });
      firebase.ordersCount().set(updatedOrderCount);
      dispatch(updateOrdersList(ordersArr));
      dispatch(updateCartAction([]));
    }
    history.push(THANK_YOU);
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
        onClick={handleSubmit}
      />
    </div>
  );
};

export default PaymentMethod;
