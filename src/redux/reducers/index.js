import { combineReducers } from 'redux';
import input from './input';

const rootReducer = combineReducers({
  inputValue: input,
});

export default rootReducer;
