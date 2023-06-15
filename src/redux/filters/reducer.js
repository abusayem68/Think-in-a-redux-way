import { SEARCHBOOK, STATUSCHANGED } from './actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload.status,
      };
    case SEARCHBOOK:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };

    default:
      return state;
  }
};

export default reducer;
