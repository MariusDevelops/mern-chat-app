import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const currentUser = useSelector((state) => state.data.currentUser);

  return (
    <div>
      <h1>Welcome to your profile, {currentUser.username}!</h1>
    </div>
  );
};

export default ProfilePage;
