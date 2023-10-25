import React from 'react';
import ToDo from './ToDo';
import TodoItem from './ToDoItem';
import './ToDoList.css';

export default function TodoList({ user, todos, todoDispatch }) {
  const handleAddTodo = newTodo => {
    todoDispatch({ type: 'CREATE_TODO', data: newTodo });
  };

  const handleToggleComplete = clickedTodo => {
    todoDispatch({ type: 'TOGGLE_TODO', data: clickedTodo });
  };

  const handleDeleteTodo = clickedTodo => {
    todoDispatch({ type: 'DELETE_TODO', data: clickedTodo });
  };

  return (
    <div className="todo-list">
      <ToDo onAddTodo={handleAddTodo} user={user} />
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo} />
      ))}
    </div>
  );
}
