import React, { useContext, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import ToDo from './ToDo';
import './ToDoList.css';
import { useResource } from 'react-request-hook';
import { useStateValue } from './contexts';


export default function ToDoList() {
   const [{ access_token }, dispatch] = useStateValue();
  const [todoResponse, getTodos] = useResource(() => ({
    url: '/todos',
    headers: { Authorization: `${access_token}` },
    method: 'GET',
  }));

  const [createdTodoResponse, createTodo] = useResource((data) => ({
    url: '/todos',
    headers: { Authorization: `${access_token}` },
    method: 'POST',
    data,
  }));

  const [updatedTodoResponse, updateTodo] = useResource((id, data) => ({
    url: `/todos/${id}`,
    headers: { Authorization: `${access_token}` },
    method: 'PATCH',
    data,
  }));

  const [deletedTodoResponse, deleteTodo] = useResource((id) => ({
    url: `/todos/${id}`,
    headers: { Authorization: `${access_token}` },
    method: 'DELETE',
  }));

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    if (createdTodoResponse && createdTodoResponse.data) {
      dispatch({ type: "CREATE_TODO", data: createdTodoResponse.data });
    }
    getTodos();
  }, [createdTodoResponse, dispatch, getTodos]);

  useEffect(() => {
    if (updatedTodoResponse && updatedTodoResponse.data) {
      dispatch({ type: "TOGGLE_TODO", data: { ...updatedTodoResponse.data, id: updatedTodoResponse.data.id } });
    }
    getTodos();
  }, [updatedTodoResponse]);

  useEffect(() => {
    if (deletedTodoResponse && deletedTodoResponse.data) {
      dispatch({ type: "DELETE_TODO", data: deletedTodoResponse.data });
    }
    getTodos();
  }, [deletedTodoResponse, dispatch, getTodos]);

  const handleAddTodo = (newTodo) => {
    createTodo(newTodo);
  };

  const handleToggleComplete = (clickedTodo) => {
    const { _id, ...rest } = clickedTodo;
    updateTodo(_id, { ...rest, complete: !clickedTodo.complete, dateCompleted: clickedTodo.complete ? null : Date.now() });
    dispatch({ type: "TOGGLE_TODO", data: { _id, ...rest, complete: !clickedTodo.complete, dateCompleted: clickedTodo.complete ? null : Date.now() } });
  };

  const handleDeleteTodo = (clickedTodo) => {
    deleteTodo(clickedTodo._id);
  };
  const reversedTodos = todoResponse.data ? [...todoResponse.data].reverse() : [];

  return (
    <div className="todo-list">
    <ToDo onAddTodo={handleAddTodo} />
    {reversedTodos.map((todo, index) => (
      <ToDoItem key={index} todo={todo} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo} />
    ))}
  </div>
  );
}
