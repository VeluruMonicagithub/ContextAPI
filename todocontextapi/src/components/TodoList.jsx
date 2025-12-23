import React, {useContext} from 'react';
import {TodoContext} from '../context/TodoContext';
import TodoItem from './TodoItem';
const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <h3>Task List</h3>
      {todos.length === 0 ? <p>No todos yet.</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;