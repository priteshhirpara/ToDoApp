import React from 'react';
import UserBar from './UserBar';
import { StateProvider } from './contexts';
import { userReducer } from './reducers';

function App() {
  const initialState = {
    user: '',
    isCreateTodoVisible: false,
    todos: [],
  };

  return (
    <StateProvider initialState={initialState} reducer={userReducer}>
      <div>
        <UserBar />
      </div>
    </StateProvider>
  );
}

export default App;
