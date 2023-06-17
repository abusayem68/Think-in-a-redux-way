const { createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  const posts = await response.json();
  return posts;
});

module.exports = fetchTodos;
