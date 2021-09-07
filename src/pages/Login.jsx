import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.login(username, password);
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
