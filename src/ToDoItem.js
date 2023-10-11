import React from "react";
import './ToDoItem.css';

export default function TodoItem ({ todo, onToggleComplete }) {
  const { title, description, author, dateCreated, complete, dateCompleted } = todo;
  return (
    <div className={`todo-item ${complete ? "completed" : ""}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>Author: {author}</p>
      <p>Created: {new Date(dateCreated).toLocaleString()}</p>
      <label className="complete-checkbox">
        Complete:{" "}
        <input type="checkbox" checked={complete} onChange={() => onToggleComplete(todo)} />
      </label>
      {complete && <p>Completed: {new Date(dateCompleted).toLocaleString()}</p>}
    </div>
  );
};

