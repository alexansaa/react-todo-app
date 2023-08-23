import { useState } from 'react';
import TodosList from './TodosList';

const TodosLogic = () => {
    const [todos, setTodos] = useState([
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ]);
    return (
      <div>
        Hola
        
        <TodosList todosProps={todos} setTodos={setTodos} />
      </div>
    );
  };
  export default TodosLogic;