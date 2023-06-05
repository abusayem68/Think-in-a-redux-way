import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';
import dynanamicCounterReducer from './dynamicCounter/dynamicCounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynanamicCounterReducer,
});

export default rootReducer;
