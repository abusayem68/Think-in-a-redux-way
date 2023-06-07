import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const { todos, filter } = useSelector((state) => state);

  const filterByStatus = (todo) => {
    const { status } = filter;
    switch (status) {
      case 'incomplete':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filter;
    if (colors.length > 0) {
      return colors.includes(todo.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => filterByStatus(todo))
        .filter((todo) => filterByColors(todo))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        ))}
    </div>
  );
};

export default TodoList;
