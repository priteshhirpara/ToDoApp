import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import ToDoList from './ToDoList';
import { useStateValue } from './contexts';

export default function UserBar() {
  const [{ user, isCreateTodoVisible }, dispatch] = useStateValue();

  if (user) {
    return (
      <div className="App">
        <h1>Todo App : </h1>
        {isCreateTodoVisible && <ToDoList />}
        <Logout />
      </div>
    );
  } else {
    return (
      <>
        <Register dispatch />
        <Login dispatch />
      </>
    );
  }
}
