import React from 'react';
import { useStateValue } from './contexts';

export default function Logout() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="login-container" id="login-block">
      <form className="login-form" onSubmit={(event) => { event.preventDefault(); dispatch({ type: 'LOGOUT' }); }}>
        <h2>Logged User Name: {user}</h2>
        <div className="form-group">
          <input className="login-button" type="submit" value="Sign Out" />
        </div>
      </form>
    </div>
  );
}
