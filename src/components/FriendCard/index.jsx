import React from "react";
import MessageButton from "../MessageButton";
import "./FriendCard.css";
import { useNavigate } from "react-router-dom"

const FriendCard = ({ username }) => {

  const navigate = useNavigate()
  const handleMessageClick = () => {
    // call the onMessage prop
    navigate('/chat');
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-card-content">
          <div className="left-content">
            <h3>{username}<div className="friendcard-footer"><MessageButton onClick={handleMessageClick} /></div></h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FriendCard
