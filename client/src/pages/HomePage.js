import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page-bg"></div>
      <h1>Welcome to My Chat App</h1>
      <div className="image-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915__480.jpg"
          alt="People chatting on the My Chat App"
        />
      </div>
    </div>
  );
}

export default HomePage;
