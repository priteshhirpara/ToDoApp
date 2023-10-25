import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import TodoList from './ToDoList';

export default function UserBar({ user, isCreateTodoVisible, dispatch, todos, todoDispatch }) {
  if (user) {
    return (
      <div className="App">
        <h1>Todo App : </h1>
        {isCreateTodoVisible && <TodoList user={user} todos={todos} todoDispatch={todoDispatch} />}
        <Logout user={user} dispatch={dispatch} />
      </div>
    );
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
