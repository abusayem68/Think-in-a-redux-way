import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';
import myLogger from './middlewares/myLogger';

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger))
);

export default store;
