import React, { useEffect, useState } from 'react';
import './Login.css';
import { useResource } from 'react-request-hook';
import { useStateValue } from './contexts';


export default function Login() {
  const [ loginFailed, setLoginFailed ] = useState(false)
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [, dispatch] = useStateValue();

  const [user, login] = useResource((data)=>({
    url:'/auth/login',
    method:'POST',
    data,
  }));
  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setLoginFailed(true);
      } else {
        setLoginFailed(false);
        dispatch({
          type: "LOGIN",
          access_token: user.data.access_token,
          data: user.data.username,
        });
      }
    }
  }, [user]);
  function handleLoginEmailEvent(event) {
    setUserEmail(event.target.value);
  }

  function handleLoginPasswordEvent(event) {
    setUserPassword(event.target.value);
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    if (userEmail && userPassword) {
      login({ email: userEmail, password: userPassword });
    }
  }

  return (
    
    <div className="login-container" id="login-block">
    <form className="login-form" onSubmit={handleLoginSubmit}>
    {loginFailed && (
        <span style={{ color: "red" }}>Invalid username or password</span>
      )}

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
          userEmail.indexOf('@') === -1 ||
          userEmail.indexOf('.') === -1 ||
          userPassword.length < 6 ||
          userPassword.length > 18
        }
      >
        Sign In
      </button>
      <div className="form-group">
        <br />
        <span style={userEmail.length === 0 ? { color: 'red' } : { color: 'green' }}>Email should not be EMPTY</span>
        <br />
        <span style={userEmail.indexOf('@') === -1 ? { color: 'red' } : { color: 'green' }}>Email should have @</span>
        <br />
        <span style={userEmail.indexOf('.') === -1 ? { color: 'red' } : { color: 'green' }}>Email should have .</span>
        <br />
        <span style={userPassword.length < 6 ? { color: 'red' } : { color: 'green' }}>Password must be greater than 6 characters</span>
        <br />
        <span style={userPassword.length > 18 || userPassword.length === 0 ? { color: 'red' } : { color: 'green' }}>
          Password Must be less than 18 characters
        </span>
        <br />
      </div>
      <div className="form-group">
        <a href="#register-block" className="link-button">
          Register
        </a>
      </div>
    </form>
  </div>
  );
}
