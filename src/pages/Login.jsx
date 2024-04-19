import React, { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions like sending the username and password to a backend server here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='left-container'>
          <div className='overlay'>
            <h1>Welcome.</h1>
            <p>TROVU Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className='right-container'>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <input
                type='text'
                id='username'
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <label htmlFor='username'>Username</label>
            </div>
            <div className='input-group'>
              <input
                type='password'
                id='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
