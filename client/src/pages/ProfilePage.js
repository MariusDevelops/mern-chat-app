import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const currentUser = useSelector((state) => state.data.currentUser);

  useEffect(() => {
    // Fetch the current user's image URL from the server
    fetch(`http://localhost:3007/getUserImage/${currentUser.secret}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setImageUrl(data.imageUrl);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentUser]);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImageUrlSubmit = () => {
    fetch('http://localhost:3007/updatePhoto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: currentUser.secret,
        imageUrl: imageUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log('Image URL updated successfully!');
          // alert('Image URL updated successfully!');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Welcome to your profile, {currentUser.username}!</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="User profile" />
      ) : (
        <p>Loading image...</p>
      )}
      <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      <button onClick={handleImageUrlSubmit}>Update</button>
    </div>
  );
};

export default ProfilePage;
