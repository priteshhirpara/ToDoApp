import React from "react";
import "./Login.css";

export default function Logout({ user, dispatch }) {
  return (
    <div className="login-container" id="login-block">
      <form className="login-form" onSubmit={(event) => { event.preventDefault(); dispatch({ type: 'LOGOUT' }); }}>
        <h2>Logged User Email: {user}</h2>
        <div className="form-group">
          <input className="login-button" type="submit" value="Sign Out" />
        </div>
      </form>
    </div>
  );
}