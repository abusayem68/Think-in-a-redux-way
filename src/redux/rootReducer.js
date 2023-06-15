import { combineReducers } from 'redux';
import booksReducer from './bookStore/reducer';
import filtersReducer from './filters/reducer';
import editingReducer from './editBook/reducer';

const rootReducer = combineReducers({
  books: booksReducer,
  editing: editingReducer,
  filters: filtersReducer,
});

export default rootReducer;
