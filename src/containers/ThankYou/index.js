import React from 'react';
import { useHistory } from 'react-router-dom';

import { HOME } from '../../constants/routes';

import Button from './../../components/Button';

import smileIcon from './../../global/assets/icons/smile.svg';

import './ThankYou.scss';

const ThankYou = () => {
  const history = useHistory();

  return (
    <div className="ThankYou d-flex flex-direction-col justify-content-center align-items-center">
      <img alt="smile" src={smileIcon} />
      <div className="ThankYou-message">Thank you for shopping with us</div>
      <Button
        label="CONTINUE SHOPPING"
        varient="secondary"
        onClick={() => history.push(HOME)}
      />
    </div>
  );
};

export default ThankYou;
