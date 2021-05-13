import React from 'react';

import './ErrorMessage.scss';

const ErrorMessage = ({ message }) => {
  return <div className="ErrorMessage">{message}</div>;
};

export default ErrorMessage;
