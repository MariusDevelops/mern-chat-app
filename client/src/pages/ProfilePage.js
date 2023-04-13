import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  );
  const currentUser = useSelector((state) => state.data.currentUser);

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
          alert('Image URL updated successfully!');
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
      <img src={imageUrl} alt="User profile" />
      <input type="text" value={imageUrl} onChange={handleImageUrlChange} />
      <button onClick={handleImageUrlSubmit}>Update</button>
    </div>
  );
};

export default ProfilePage;
