import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filters/actions';

const numberOfTodos = (num_of_todos) => {
  switch (num_of_todos) {
    case 0:
      return 'No task';
    case 1:
      return '1 task';

    default:
      return `${num_of_todos} tasks`;
  }
};

const Footer = () => {
  const { filters, todos } = useSelector((state) => state);
  const { status, colors } = filters || {};
  const dispatch = useDispatch();

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = (color) => {
    if (!colors.includes(color)) {
      dispatch(colorChanged(color, 'added'));
    } else {
      dispatch(colorChanged(color, 'removed'));
    }
  };

  const todoRemaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todoRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChanged('all')}
          className={`cursor-pointer ${status === 'all' && 'font-bold'}`}>
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged('incomplete')}
          className={`cursor-pointer ${
            status === 'incomplete' && 'font-bold'
          }`}>
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChanged('completed')}
          className={`cursor-pointer ${
            status === 'completed' && 'font-bold'
          } `}>
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChanged('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes('green') && 'bg-green-500'
          }`}></li>
        <li
          onClick={() => handleColorChanged('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes('red') && 'bg-red-500'
          }`}></li>
        <li
          onClick={() => handleColorChanged('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes('yellow') && 'bg-yellow-500'
          }`}></li>
      </ul>
    </div>
  );
};

export default Footer;
