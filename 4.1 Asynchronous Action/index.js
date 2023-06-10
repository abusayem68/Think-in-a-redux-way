const { legacy_createStore, applyMiddleware } = require('redux');
const {
  delayActionMiddleware,
  fetchTodosMiddleware,
  fetchAsyncMiddleware,
} = require('./middlewares');
const { fetchTodos } = require('./utils');
const thunk = require('redux-thunk');

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return { ...state, todos: [...state.todos, { title: action.payload }] };
    case 'todos/todosLoaded':
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

const store = legacy_createStore(
  todosReducer,
  applyMiddleware(delayActionMiddleware, thunk.default)
);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'todos/addTodo',
//   payload: 'Learn redux from LWS',
// });

// store.dispatch({
//   type: 'todos/fetchTodos',
// });

store.dispatch(fetchTodos);
