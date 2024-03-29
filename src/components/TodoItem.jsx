import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';
import { useAuthContext } from '@/context/AuthContext';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const { user } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleEditing = () => {
    setEditing(true);
  }
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  }
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button onClick={handleEditing}>
            Edit
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.node.isRequired,
  handleChange: PropTypes.node.isRequired,
  delTodo: PropTypes.node.isRequired,
  setUpdate: PropTypes.node.isRequired,
};

export default TodoItem;