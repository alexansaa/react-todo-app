import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.node.isRequired,
  handleChange: PropTypes.node.isRequired,
  delTodo: PropTypes.node.isRequired,
  setUpdate: PropTypes.node.isRequired,
};

export default TodosList;