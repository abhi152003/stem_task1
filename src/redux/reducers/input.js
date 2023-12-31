const input = (state = '', action) => {
    switch (action.type) {
      case 'SET_INPUT_VALUE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default input;
  