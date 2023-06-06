import { BOOK, DELETE } from './actionTypes';

export const bookFlight = (value) => {
  return {
    type: BOOK,
    payload: {
      value,
    },
  };
};

export const deleteFlight = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};
