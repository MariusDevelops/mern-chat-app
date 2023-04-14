import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllUsers } from '../features/dataSlice';
import { Link } from 'react-router-dom';

// UserCard component
const UserCard = ({ user }) => {
  const { username, imageUrl } = user;

  return (
    <Link to={`/user/${username}`}>
      <div className="user-card">
        <img src={imageUrl} alt={`${username}'s profile`} />
        <h3>{username}</h3>
      </div>
    </Link>
  );
};

const AllUsersPage = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.data.allUsers);

  useEffect(() => {
    // Fetch all users from the server
    fetch('http://localhost:3007/allUsers')
      .then((response) => response.json())
      .then((data) => {
        // Update the allUsers state in the Redux store
        dispatch(setAllUsers(data));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div>
      <h1>All Users</h1>
      <div className="user-list">
        {allUsers.map((user) => (
          <UserCard key={user.secret} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsersPage;
