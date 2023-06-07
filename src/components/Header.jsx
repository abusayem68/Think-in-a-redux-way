import { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleTickImg from '../assets/images/double-tick.png';
import noteImg from '../assets/images/notes.png';
import {
  addTodo,
  allCompleted,
  clearCompleted,
} from '../redux/todosSlice/actions';

const Header = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim().length > 0) {
      dispatch(addTodo(todoText));
      setTodoText('');
    } else {
      alert('Empty text can not be added');
    }
  };

  const handleCompleteAllTask = () => {
    dispatch(allCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img
          src={noteImg}
          className="w-6 h-6"
          alt="Add todo"
        />
        <input
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./src/assets/images/plus.png')] bg-no-repeat bg-contain"></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAllTask}
          className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src={doubleTickImg}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={handleClearCompleted}
          className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
