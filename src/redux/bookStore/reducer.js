import { ADD, DELETE, LOADED } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, books: [...action.payload.books] };
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload.book],
        editing: {},
      };
    case DELETE:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.bookId),
      };
    default:
      return state;
  }
};

export default reducer;
