import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { setUser } from '../features/dataSlice';

const ChatPage = () => {
  const { id } = useParams();
  const messageRef = useRef();

  const myUser = useSelector((state) => state.data.myUser);

  const [convo, setConvo] = useState(null);

  const sendMessage = () => {
    const user = {
      id,
      username: myUser.username,
      secret: myUser.secret,
      message: messageRef.current.value,
    };

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:3007/sendMessage', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConvo(data.conversation);
      });
  };

  useEffect(() => {
    fetch('http://localhost:3007/chat/' + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConvo(data.conversation);
      });
  }, [id]);

  const like = (index) => {
    fetch(`http://localhost:3007/like/${id}/${index}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setConvo(data.conversation);
      });
  };

  const convertTime = (stamp) => {
    const date = new Date(stamp);

    return (
      date.getHours() + ':' + date.getMinutes() + ', ' + date.toDateString()
    );
  };

  return (
    <div className="d-flex j-center">
      <div className="container d-flex column chatWindow">
        <div className="grow1 chatTable">
          {convo?.messages.map((x, i) => (
            <div key={i} className="singleMessage">
              <h3>{x.username}</h3>
              {/* <div>{x.message}</div> */}
              <div>
                {x.message.includes('http') ? (
                  <img className="chatImage" src={x.message} alt="" />
                ) : (
                  x.message
                )}
              </div>
              <b>{convertTime(x.time)}</b>
              <div className="d-flex j-center">
                <div>Likes: {x.likes}</div>
                <button className="ml-3" onClick={() => like(i)}>
                  Like
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="chatBottom">
          <input type="text" ref={messageRef} placeholder="message" />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;