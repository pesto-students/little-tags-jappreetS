import React, { useEffect, useRef, useState } from 'react';

import trashIcon from './../../global/assets/icons/trash.svg';

import './Counter.scss';

const Counter = ({ count = 0, isCart = false, onCountChange }) => {
  const [countValue, setCountValue] = useState(count);
  const initialRender = useRef(true);

  useEffect(() => {
    setCountValue(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      onCountChange(countValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countValue]);

  const handleCount = (mode) => {
    if (mode === 'increment') {
      setCountValue((c) => c + 1);
    } else {
      countValue >= 1 && setCountValue((c) => c - 1);
    }
  };

  return (
    <div className="Counter d-flex align-items-center">
      <button
        type="button"
        className="Counter-btn d-flex align-items-center"
        onClick={() => handleCount('decrement')}
      >
        {countValue === 1 && isCart ? (
          <img alt="delete" src={trashIcon} />
        ) : (
          '-'
        )}
      </button>
      <div className="Counter-count align-self-center">{countValue}</div>
      <button
        type="button"
        className="Counter-btn"
        onClick={() => handleCount('increment')}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
