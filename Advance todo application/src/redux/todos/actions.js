import {
  ADDTODO,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETETODO,
  TOGGLED,
  TODOLOADED,
} from './actionTypes';

export const todoLoaded = (todos) => {
  return {
    type: TODOLOADED,
    payload: {
      todos,
    },
  };
};
export const addTodo = (todoText) => {
  return {
    type: ADDTODO,
    payload: {
      todoText,
    },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETETODO,
    payload: { todoId },
  };
};
export const toggledStatus = (todoId) => {
  return {
    type: TOGGLED,
    payload: { todoId },
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
