import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllUsers } from '../features/dataSlice';

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
      <ul>
        {allUsers.map((user) => (
          <li key={user.secret}>
            {user.username} ({user.secret})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsersPage;
