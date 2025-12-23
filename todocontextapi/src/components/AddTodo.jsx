import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/TodoContext';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const {addTodo} = useContext(TodoContext);

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo title..." 
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;