import { applyMiddleware, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myLogger from './middlewares/myLogger';
import rootReducer from './rootReducer';

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger))
);

export default store;
