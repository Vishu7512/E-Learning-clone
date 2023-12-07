import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform username validation
    if (username.trim().length < 3) {
      setUsernameError('Username must contain at least 3 characters');
      return;
    }

    // Here you can add your login logic
    // For this example, we just check if the username and password are non-empty
    if (username && password) {
      setLoginSuccess(true);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="error-msg">{usernameError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {loginSuccess && <p className="login-success">Login successful! Welcome, {username}!</p>}
      </form>
    </div>
  );
};

export default Login;
