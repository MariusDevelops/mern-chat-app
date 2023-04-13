// import React from 'react';
// import { Link } from 'react-router-dom';

// const Toolbar = () => {
//   return (
//     <div className="navigation-bar">
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/register">Register</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/profile">Profile</Link>
//         <Link to="/allusers">All Users</Link>
//         <Link to="/conversations">Conversations</Link>
//       </div>
//     </div>
//   );
// };

// export default Toolbar;

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Toolbar = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);

  return (
    <div className="navigation-bar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        {isLoggedIn && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/allusers">All Users</Link>
            <Link to="/conversations">Conversations</Link>
          </>
        )}
        {!isLoggedIn && <Link to="/login">Login</Link>}
      </div>
    </div>
  );
};

export default Toolbar;
