import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { setUser } from '../features/dataSlice';
import { useSelector } from 'react-redux';

const UserProfilePage = () => {
  const myUser = useSelector((state) => state.data.myUser);

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

  const convo = () => {
    const data = {
      secret: myUser.secret,
      from: myUser.username,
      to: user.username,
    };

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://localhost:3007/newConversation', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>{username}'s Profile</h1>
      <h1>{user.secret} --- secretas</h1>
      {user.imageUrl && (
        <img src={user.imageUrl} alt={`${username}'s profile`} />
      )}
      {!user.imageUrl && <p>No image available.</p>}
      <button onClick={convo}>Send Message</button>
    </div>
  );
};

export default UserProfilePage;
