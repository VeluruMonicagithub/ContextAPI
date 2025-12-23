import React, {useState} from 'react';
import {TodoContext} from '../context/TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
        <h1>Global Todo Manager</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default Todos;