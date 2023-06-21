import React from "react";
import ConnectionButton from "../ConnectionButton";
import MessageButton from "../MessageButton";
import "./ProfileCard.css";

const ProfileCard = ({ user, username, profile_bio, rating, onConnect, platform, language_known, language_learn, game_name }) => {
  const handleConnectClick = () => {
    // call the onConnect prop
    onConnect(user.id);
  };

  const handleMessageClick = () => {
    // call the onMessage prop
    onMessage(user.id);
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-card-content">
          <div className="left-content">
            <h3>{username}</h3>
            <p>
              {/* <span className="rating"> Stars {user.rating}</span> */}
            </p>
            <h4>Bio</h4>
            <p>{profile_bio}</p>
          </div>
        </div>
        <div className="card-body">
          <h4>Console</h4>
          <h5>{platform}</h5>
          <h4>Plays</h4>
          <h5>{game_name}</h5>
          <div className="right-content">
            <br />
            <h4>Speaks</h4>
            <h5>{language_known}</h5>
            <br />
            <h4>Learning</h4>
            <h5>{language_learn}</h5>
          </div>
        </div>
        <div className="card-footer">
          <ConnectionButton onClick={handleConnectClick} />
          <MessageButton onClick={handleMessageClick} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
