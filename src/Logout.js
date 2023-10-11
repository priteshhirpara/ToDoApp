import './Login.css';
export default function Logout({user,setUser}){
    return(
        <div className="login-container" id="login-block">
        <form className="login-form" onSubmit={event=>{event.preventDefault(); setUser(``)}}>
        <h2>Logged User Email : </h2> <i>{user}</i>
            <div className="form-group">   
                <input className="login-button" type="submit" value="Sign Out" />
            </div>
        </form>
        </div>
    )
}

