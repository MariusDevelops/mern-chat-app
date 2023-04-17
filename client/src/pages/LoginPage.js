import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/dataSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  function auth() {
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:3007/login', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setIsSuccess(true);
          dispatch(
            setUser({
              secret: data.secret,
              username: data.username,
            })
          );
          // Navigate to login page
          navigate('/profile');
        } else {
          setIsSuccess(false);
        }
      });
  }

  return (
    <div className="page-layout">
      <input type="text" ref={nameRef} placeholder="username" />
      <input type="text" ref={passwordRef} placeholder="password" />

      <button onClick={auth}>Login</button>
      {isSuccess === true && <p className="success-color">Success</p>}
      {isSuccess === false && <p className="error-color">Wrong credentials</p>}
    </div>
  );
};

export default LoginPage;
