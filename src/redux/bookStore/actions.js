import { ADD, DELETE, LOADED } from './actionTypes';

export const booksLoaded = (books) => {
  return {
    type: LOADED,
    payload: {
      books,
    },
  };
};
export const addedBook = (book) => {
  return {
    type: ADD,
    payload: {
      book,
    },
  };
};
export const deleteBook = (bookId) => {
  return {
    type: DELETE,
    payload: {
      bookId,
    },
  };
};
