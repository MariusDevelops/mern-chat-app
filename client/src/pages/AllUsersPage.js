import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllUsers } from '../features/dataSlice';

// UserCard component
const UserCard = ({ user }) => {
  return (
    <div>
      <img src={user.imageUrl} alt={user.username} height="100" />
      <h3>{user.username}</h3>
    </div>
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
      <div>
        {allUsers.map((user) => (
          <UserCard key={user.secret} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AllUsersPage;
