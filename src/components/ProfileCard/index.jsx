import React from "react";
import ConnectionButton from "../ConnectionButton";

const ProfileCard = ({user, username, profile_bio, rating, onConnect}) => {

  const handleConnectClick = () => {
    // call the onConnect prop
    onConnect(user.id);
  };

  return (
    <div className="profile-card">
      <h3>{username}</h3>
      <p>{profile_bio}</p>
      <p>
        <span className="rating"> Stars {user.rating}</span>
        </p>
      <h4>Languages known</h4>
      <h4>Languages learning</h4>
      <ConnectionButton onClick={handleConnectClick} />
      <br/>
    </div>
  );
};
export default ProfileCard;
