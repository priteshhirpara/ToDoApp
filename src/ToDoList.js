import React, { useState } from "react";
import ToDo from "./ToDo";
import TodoItem from "./ToDoItem";
import './ToDoList.css';


export default function TodoList ({user}) {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (clickedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo === clickedTodo ? { ...todo, complete: !todo.complete, dateCompleted: todo.complete ? null : Date.now() } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <ToDo onAddTodo={handleAddTodo} user={user} />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onToggleComplete={handleToggleComplete} />
      ))}
    </div>
  );
};
