import React, { useState } from 'react';

import './Counter.scss';

const Counter = ({ defaultCount = 0 }) => {
  let [count, setCount] = useState(defaultCount);

  const handleCount = (mode) => {
    if (mode === 'increment') {
      setCount((c) => c + 1);
    } else {
      count >= 1 && setCount((c) => c - 1);
    }
  };

  return (
    <div className="Counter d-flex align-items-center">
      <button
        type="button"
        className="Counter-btn"
        onClick={() => handleCount('decrement')}
      >
        -
      </button>
      <div className="Counter-count align-self-center">{count}</div>
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
