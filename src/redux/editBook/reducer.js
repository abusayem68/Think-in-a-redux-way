import { EDIT, UPDATED } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT:
      return {
        status: true,
        bookId: action.payload.bookId,
      };
    case UPDATED:
      return {
        status: false,
        bookId: '',
      };
    default:
      return state;
  }
};

export default reducer;
