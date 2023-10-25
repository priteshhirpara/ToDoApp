import React, { useReducer } from 'react';
import UserBar from './UserBar';
import { userReducer } from './UserReducer';
import { todoReducer } from './TodoReducer';

function App() {
  const initialState = { user: '', isCreateTodoVisible: false, todos: [] };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [todos, todoDispatch] = useReducer(todoReducer, initialState.todos);

  return (
    <div>
      <UserBar user={state.user} isCreateTodoVisible={state.isCreateTodoVisible} dispatch={dispatch} todos={todos} todoDispatch={todoDispatch} />
    </div>
  );
}

export default App;