import './App.css';
import UserBar from './UserBar';
import { useState } from 'react';

function App() {
  const [user,setUser]=useState(``)
  return (
    <div>
       <UserBar user={user} setUser={setUser} />
    </div>
  );
}

export default App;
