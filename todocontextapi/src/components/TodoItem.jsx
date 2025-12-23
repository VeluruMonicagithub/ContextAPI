import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';

const TodoItem = ({id}) => {
  const { todos, deleteTodo } = useContext(TodoContext);
  
  // Find the specific todo details from the global context using the ID
  const item = todos.find(t => t.id === id);

  if (!item) return null;

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      borderBottom: '1px solid #ddd',
      padding: '5px 0' 
    }}>
      <span>{item.title}</span>
      <button onClick={() => deleteTodo(id)} style={{ color: 'red' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;