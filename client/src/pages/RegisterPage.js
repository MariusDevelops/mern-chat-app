import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordTwoRe = useRef();
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function auth() {
    const username = nameRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const passwordTwo = passwordTwoRe.current.value.trim();
    const validationErrors = [];

    // Check username length
    if (username.length < 4 || username.length > 20) {
      validationErrors.push('Username must be between 4 and 20 characters');
    }

    // Check password length
    if (password.length < 4 || password.length > 20) {
      validationErrors.push('Password must be between 4 and 20 characters');
    }

    // Check password contains uppercase letter
    if (!/[A-Z]/.test(password)) {
      validationErrors.push(
        'Password must contain at least one uppercase letter'
      );
    }

    // Check password contains special symbol
    if (!/[!@#$%^&*_+]/.test(password)) {
      validationErrors.push(
        'Password must contain at least one special symbol (!@#$%^&*_+)'
      );
    }

    // Check password match
    if (password !== passwordTwo) {
      validationErrors.push('Passwords do not match');
    }

    // Set validation errors
    setErrors(validationErrors);

    // Send request if validation passes
    if (validationErrors.length === 0) {
      const user = {
        username: username,
        password: password,
      };

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      };

      fetch('http://localhost:3007/register', options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate('/login');
        });
    }
  }

  return (
    <div className="page-layout">
      <input type="text" ref={nameRef} placeholder="username" />
      <input type="text" ref={passwordRef} placeholder="password" />
      <input type="text" ref={passwordTwoRe} placeholder="password 2" />

      <button onClick={auth}>Register</button>

      {errors.length > 0 && (
        <div className="error-color">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
