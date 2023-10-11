import { useState } from "react";
import './ToDo.css';
export default function ToDo({user,onAddTodo}){
   
    const [newTodo, setNewTodo] = useState({ title: "", description: "", author: "", dateCreated: null, complete: false, dateCompleted: null });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewTodo({ ...newTodo, [name]: value,author:user, dateCreated: Date.now() });
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (newTodo.title) {
        onAddTodo({ ...newTodo,author:user, dateCreated: Date.now(), complete: false, dateCompleted: null });
        setNewTodo({ title: "", description: "", author: "", dateCreated: null, complete: false, dateCompleted: null });
      }
    };
 return(
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
 )
}