const { configureStore } = require('@reduxjs/toolkit');
const todosReducer = require('./todos/todoSlice');
const { createLogger } = require('redux-logger');

const logger = createLogger();

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMidleware) => getDefaultMidleware().concat(logger),
});

module.exports = store;
