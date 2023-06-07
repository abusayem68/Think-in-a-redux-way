import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filterSlice/actions';

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return '0 task';
    case 1:
      return '1 task';
    default:
      return `${no_of_todos} tasks`;
  }
};

const Footer = () => {
  const { filter, todos } = useSelector((state) => state);
  const { status, colors } = filter;

  const dispatch = useDispatch();

  const handleStatusStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };
  const todosRemaining = todos.filter((todo) => todo.completed !== true).length;
  const handleColorChanged = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'removed'));
    } else {
      dispatch(colorChanged(color, 'added'));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusStatusChanged('all')}
          className={`cursor-pointer  ${status === 'all' && 'font-bold'}`}>
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusStatusChanged('incomplete')}
          className={`cursor-pointer  ${
            status === 'incomplete' && 'font-bold'
          }`}>
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusStatusChanged('completed')}
          className={`cursor-pointer  ${
            status === 'completed' && 'font-bold'
          }`}>
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
