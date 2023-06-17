const { createSlice } = require('@reduxjs/toolkit');
const fetchTodos = require('./thunk/fetchTodos');
const initialState = {
  isLoading: false,
  error: '',
  todos: [],
};
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.todos = [];
      });
  },
});

module.exports = todoSlice.reducer;
