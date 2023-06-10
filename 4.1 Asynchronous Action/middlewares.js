const fetch = require('node-fetch');
const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/addTodo') {
    console.log('I am delaying you');
    setTimeout(() => {
      return next(action);
    }, 2000);
    return;
  }
  return next(action);
};

// own thunk middleware function
const fetchAsyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchAsyncMiddleware,
};
