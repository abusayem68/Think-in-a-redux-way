import { EDIT, UPDATED } from './actionTypes';

export const editBook = (bookId) => {
  return {
    type: EDIT,
    payload: {
      bookId,
    },
  };
};
export const updated = (book) => {
  return {
    type: UPDATED,
    payload: {
      book,
    },
  };
};
