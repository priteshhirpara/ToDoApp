import React, { useState } from 'react';
import './ToDo.css';
import { v4 as uuidv4 } from 'uuid'; 

import { useStateValue } from './contexts';

export default function ToDo({onAddTodo}) {
  const [newTodo, setNewTodo] = useState({ id: '', title: '', description: '', author: '', dateCreated: null, complete: false, dateCompleted: null });
  const [{ user }, dispatch] = useStateValue();

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTodo({ ...newTodo, [name]: value, id: uuidv4(), author: user, dateCreated: Date.now() });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.title) {
      onAddTodo({ ...newTodo,author:user,id:uuidv4(), dateCreated: Date.now(), complete: false, dateCompleted: null });
      setNewTodo({ title: '', description: '', author: '', dateCreated: null, complete: false, dateCompleted: null });
    }
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newTodo.title} onChange={handleInputChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newTodo.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
