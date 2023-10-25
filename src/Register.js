import React, { useState } from 'react';
import './Register.css';
    
    export default function Register({ dispatch }) {
      const [userName, setUserName] = useState('');
      const [userEmail, setUserEmail] = useState('');
      const [userPassword, setUserPassword] = useState('');
      const [userConfirmPassword, setUserConfirmPassword] = useState('');
      function handleLoginUsernameEvent(event){
        setUserName(event.target.value);
    }   
    function handleLoginEmailEvent(event){
        setUserEmail(event.target.value);
    }   
    function handleLoginPasswordEvent(event){
        setUserPassword(event.target.value);
    }   
    function handleLoginConfirmPasswordEvent(event){
        setUserConfirmPassword(event.target.value);
    }
      function handleRegisterSubmit(event) {
        event.preventDefault();
        if (userName && userEmail && userPassword && userPassword === userConfirmPassword) {
          dispatch({ type: 'REGISTER', data: userEmail });
        }
      }
    
      return (
        <div className="register-container" id="register-block">
        <form className="register-form" onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <div className="form-group">
          <label htmlFor="register-username">Username:</label>
            <input
              type="text"
              value={userName}
              onChange={handleLoginUsernameEvent}
              id="register-username"
              placeholder="Enter your username"
            />
            <label htmlFor="register-useremail">Email:</label>
            <input
              type="email"
              value={userEmail}
              onChange={handleLoginEmailEvent}
              id="register-useremail"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password:</label>
            <input
              type="password"
              value={userPassword}
              onChange={handleLoginPasswordEvent}
              id="register-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-confirm-password">Confirm Password:</label>
            <input
              type="password"
              value={userConfirmPassword}
              onChange={handleLoginConfirmPasswordEvent}
              id="register-confirm-password"
              placeholder="Re-Enter your password"
            />
          </div>
          <button
            type="submit"
            className="register-button"
            disabled={
              userName.length === 0 ||
              userEmail.length === 0 ||
              userEmail.indexOf("@") === -1 ||
              userEmail.indexOf(".") === -1 ||
              userPassword.length < 6 ||
              userPassword.length > 18 ||
              userPassword!== userConfirmPassword
            }
          >
            Sign Up
          </button>
          <div className="form-group"><br/>
              <span style={userName.length === 0 ? {color:"red"} : {color:"green"}}>Username should not be EMPTY</span><br/>
              <span style={userEmail.length === 0 ? {color:"red"} : {color:"green"}}>Email should not be EMPTY</span><br/>
              <span style={userEmail.indexOf("@") === -1 ? {color:"red"} : {color:"green"}}>Email should have @</span><br/>
              <span style={userEmail.indexOf(".") === -1 ? {color:"red"} : {color:"green"}}>Email should have .</span><br/>
              <span style={userPassword.length < 6 ? {color:"red"} : {color:"green"}}>Password must be greater than 6 characters</span><br/>
              <span style={userPassword.length > 18 || userPassword.length===0 ? {color:"red"}:{color:"green"}}>Password Must be less than 18 characters</span><br/>
              <span style={userPassword !== userConfirmPassword || userPassword.length===0 || userConfirmPassword.length===0  ? {color:"red"} : {color:"green"}}>Confirm Password must be same as Password</span><br/>
          </div>
          <div className="form-group">
              <a href="#login-block" className="link-button">Login</a>
          </div>
        </form>
       
      </div>
      );
    }
    