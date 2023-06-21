import React from "react";
import ConnectionButton from "../ConnectionButton";
import MessageButton from "../MessageButton";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom"



const ProfileCard = ({ user, username, profile_bio, rating, onConnect, platform, language_known, language_learn, game_name }) => {
  const handleConnectClick = async (e) => {
    try {
      await axios.post(
        `https://linguaplaya-be.onrender.com/users/games/${localStorage.getItem("username")}`,
        {
          connect_username: username,
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${Token}`,
        //   },
        // }
        alert("added :)")
      );
    } catch (error) {

    }
  };
  
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
          <h4>{platform}</h4>
          <h4>Plays</h4>
          <h4>{game_name}</h4>
          <div className="right-content">
            <br />
            <h4>Speaks</h4>
            <h4>{language_known}</h4>
            <br />
            <br />
            <h4>Learning</h4>
            <h4>{language_learn}</h4>
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
