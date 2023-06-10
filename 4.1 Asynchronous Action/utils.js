const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const todos = await response.json();

  dispatch({
    type: 'todos/todosLoaded',
    payload: todos,
  });
  console.log(`Total todos in store ${getState().todos.length}`);
};

module.exports = {
  fetchTodos,
};
