import React from 'react';

import SessionController from '../networking/controllers/SessionController';

const SignUp = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    SessionController.signUp(username, password, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
