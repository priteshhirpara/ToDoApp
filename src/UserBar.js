import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import TodoList from "./ToDoList";
import './UserBar.css'
export default function UserBar({user,setUser}){
    if(user){
            return( 
                <div className="App">
                     <h1>Todo App</h1>
                        <TodoList user={user} />
                        <Logout user={user} setUser={setUser} />
                </div>
        )
    }else{
        return(
            <>
                <Login setUser={setUser} />
                <Register setUser={setUser} />
            </>
        )
    }
}