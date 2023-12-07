import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
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

  const getdata = async (e) =>
  {
    const {username, email, contact, password} = handleLogin;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, email, contact, password
      })
    }
    const res = await fetch(
      'https://vishal-data-default-rtdb.firebaseio.com/UserData.json' ,
      options
      )
      console.log(res)
      if (res) {
        alert("Data Save")
      }
      else{
        alert("Error occoured")
      }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="mail"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {usernameError && <p className="error-msg">{usernameError}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={getdata} type="submit">Register</button>
        {loginSuccess && <p className="login-success">Register successful! Welcome, {username}!</p>}
      </form>
    </div>
  );
};

export default Register;
