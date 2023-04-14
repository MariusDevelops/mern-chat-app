import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3007/user/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{username}'s Profile</h1>
      <h1>{user.secret} --- secretas</h1>
      {user.imageUrl && (
        <img src={user.imageUrl} alt={`${username}'s profile`} />
      )}
      {!user.imageUrl && <p>No image available.</p>}
      <button>Send Message</button>
    </div>
  );
};

export default UserProfilePage;
