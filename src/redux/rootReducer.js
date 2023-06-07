import { combineReducers } from 'redux';
import filterSliceReducer from './filterSlice/filterSliceReducer';
import todoSliceReducer from './todosSlice/todoSliceReducer';

const rootReducer = combineReducers({
  todos: todoSliceReducer,
  filter: filterSliceReducer,
});

export default rootReducer;
