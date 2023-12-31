import React from 'react';
import { useDispatch } from 'react-redux';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    dispatch({ type: 'SET_INPUT_VALUE', payload: inputValue });
  };

  return (
    <div>
      <label>Input Field:</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
