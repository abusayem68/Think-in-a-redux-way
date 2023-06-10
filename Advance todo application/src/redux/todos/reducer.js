import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETETODO,
  TODOLOADED,
  TOGGLED,
} from './actionTypes';
import initialState from './initialState';

const nextTodoId = (todoList) => {
  const maxId = todoList.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOLOADED:
      return [...action.payload.todos];
    case ADDTODO:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.todoText,
          completed: false,
        },
      ];
    case DELETETODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, color: action.payload.color };
        }
        return todo;
      });
    case ALLCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    case CLEARCOMPLETED:
      return state.map((todo) => {
        return { ...todo, completed: false };
      });
    default:
      return state;
  }
};

export default reducer;
