import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import custom styles for the LoginPage

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  // Function to validate the form
  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Username validation (email format check)
    if (!username) {
      errors.username = 'Username is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
      errors.username = 'Please enter a valid email address';
      valid = false;
    }

    // Password validation (check if it's at least 6 characters)
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If form is valid, redirect to list page
      navigate('/list');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome!!</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username (Email)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
