const TodosList = ({ todosProps, setTodos }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem itemProp={todo} setTodos={setTodos} />
        ))}
      </ul>
    );
  };
  export default TodosList;