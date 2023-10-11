import { useState } from "react";
import "./Login.css";
export default function Login({setUser}){
    const[userEmail,setUserEmail]=useState(``)
    const[userPassword,setUserPassword]=useState(``)
    function handleLoginEmailEvent(event){
        setUserEmail(event.target.value);
    }   
    function handleLoginPasswordEvent(event){
        setUserPassword(event.target.value);
    }   
    return (
        <div className="login-container" id="login-block">
          <form className="login-form" onSubmit={(event) => {event.preventDefault(); setUser(userEmail); }}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="login-useremail">Email:</label>
              <input
                type="email"
                value={userEmail}
                onChange={handleLoginEmailEvent}
                id="login-useremail"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password:</label>
              <input
                type="password"
                value={userPassword}
                onChange={handleLoginPasswordEvent}
                id="login-password"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="login-button"
              disabled={
                userEmail.length === 0 ||
                userEmail.indexOf("@") === -1 ||
                userEmail.indexOf(".") === -1 ||
                userPassword.length < 6 ||
                userPassword.length > 18
              }
            >
              Sign In
            </button>
            <div className="form-group"><br/>
                <span style={userEmail.length === 0?{color:"red"}:{color:"green"}}>Email should not be EMPTY</span><br/>
                <span style={userEmail.indexOf("@") === -1?{color:"red"}:{color:"green"}}>Email should have @</span><br/>
                <span style={userEmail.indexOf(".") === -1?{color:"red"}:{color:"green"}}>Email should have .</span><br/>
                <span style={userPassword.length < 6?{color:"red"}:{color:"green"}}>Password must be greater than 6 characters</span><br/>
                <span style={userPassword.length > 18 || userPassword.length===0 ?{color:"red"}:{color:"green"}}>Password Must be less than 18 characters</span><br/>
            </div>
            <div className="form-group">
              <a href="#register-block" className="link-button">Register</a>
            </div>
          </form>
        </div>
      );
    }