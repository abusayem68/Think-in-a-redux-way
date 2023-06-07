import {
  ADD,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETE,
  TOGGLED,
} from './actionTypes';

export const addTodo = (todoText) => {
  return {
    type: ADD,
    payload: {
      todoText,
    },
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: {
      todoId,
    },
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE,
    payload: {
      todoId,
    },
  };
};
