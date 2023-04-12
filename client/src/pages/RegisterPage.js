import React, { useRef } from 'react';

const RegisterPage = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordTwoRe = useRef();

  function auth() {
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    if (user.password !== passwordTwoRe.current.value)
      return console.log('ERROR');

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
      });
  }

  return (
    <div className="log-reg-page">
      <input type="text" ref={nameRef} placeholder="username" />
      <input type="text" ref={passwordRef} placeholder="password" />
      <input type="text" ref={passwordTwoRe} placeholder="password 2" />

      <button onClick={auth}>Register</button>
    </div>
  );
};

export default RegisterPage;
