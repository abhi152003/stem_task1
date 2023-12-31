import React from 'react';
import { useSelector } from 'react-redux';

const ComponentC = () => {
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <div>
      <h2>Value from Redux Store:</h2>
      <p>{inputValue}</p>
    </div>
  );
};

export default ComponentC;
