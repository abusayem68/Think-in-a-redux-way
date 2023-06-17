const store = require('./redux/store');
const fetchTodos = require('./redux/todos/thunk/fetchTodos');

store.dispatch(fetchTodos());
