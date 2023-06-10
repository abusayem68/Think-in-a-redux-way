import { deleteTodo } from '../actions';

const deleteTodoThunk = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'DELETE',
    });

    dispatch(deleteTodo(todoId));
  };
};

export default deleteTodoThunk;
