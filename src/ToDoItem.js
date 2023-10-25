import React from "react";
import './ToDoItem.css';

export default function TodoItem ({ todo, onToggleComplete, onDeleteTodo }) {
  const { id, title, description, author, dateCreated, complete, dateCompleted } = todo;

  const handleDeleteClick = () => {
    onDeleteTodo(todo);
  };

  return (
    <div className={`todo-item ${complete ? "completed" : ""}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>Author: {author}</p>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>
      <p>Id: {id}</p>
      <label className="complete-checkbox">
        Complete:{" "}
        <input type="checkbox" checked={complete} onChange={() => onToggleComplete(todo)} />
      </label>
      {complete && <p>Completed: {new Date(dateCompleted).toLocaleString()}</p>}
      <button onClick={handleDeleteClick} className="delete-button">Delete</button>
    </div>
  );
};