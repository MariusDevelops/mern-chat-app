import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SingleConversatonCard = ({ item }) => {
  const nav = useNavigate();

  const myUser = useSelector((state) => state.data.myUser);

  const filterName = () => {
    return item.participants.filter((x) => x !== myUser.username);
  };

  return (
    <div className="singleConvo" onClick={() => nav('/chat/' + item._id)}>
      <h2>Conversation with: {filterName()[0]}</h2>
      <h4>Messages: {item.messages.length}</h4>
    </div>
  );
};

export default SingleConversatonCard;
