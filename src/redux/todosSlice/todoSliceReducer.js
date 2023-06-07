import {
  ADD,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETE,
  TOGGLED,
} from './actionTypes';

const initialState = [];

const nextTodoId = (todoList) => {
  const maxId = todoList.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
  return maxId + 1;
};

const todoSliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.todoText,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });
    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    case CLEARCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: false };
      });
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    default:
      return state;
  }
};

export default todoSliceReducer;
