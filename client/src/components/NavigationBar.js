import React from 'react';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  return (
    <div className="navigation-bar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Toolbar;
