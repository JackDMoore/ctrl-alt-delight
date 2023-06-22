import React from "react";
import ConnectionButton from "../ConnectionButton";
import MessageButton from "../MessageButton";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileCard = ({
  user,
  username,
  profile_bio,
  rating,
  onConnect,
  platform,
  language_known,
  language_learn,
  game_name,
}) => {
  const handleConnectClick = async (e) => {
    console.log("before");
    try {
      await axios.post(
        `https://linguaplaya-be.onrender.com/users/add_connections/${localStorage.getItem(
          "username"
        )}`,
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
      console.log("after");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const handleMessageClick = () => {
    // call the onMessage prop
    navigate("/chat");
  };

  return (
    <div className="profile-card">
      {/* <div className="card-body"> */}
      <div className="card-header">
        <h3><br/></h3>
        <p>{/* <span className="rating"> Stars {user.rating}</span> */}</p>
        {/* <h4>Bio</h4> */}
        <p>{profile_bio}</p>
      </div>
      <div className="user-container">
        <h3>{username}</h3>
      </div>
      <div className="platform-container">
        <h4><span class="underline">Platform</span></h4>
        <h5>{platform}</h5>
      </div>
      <div className="game-container">
        <h4><span class="underline">Plays</span></h4>
        <h5>{game_name}</h5>
      </div>
      <div className="speaking-container">
        
        <h4><span class="underline">Speaks</span></h4>
        <h5>{language_known}</h5>
      </div>
      <div className="learning-container">
        <h4><span class="underline">Learning</span></h4>
        <h5>{language_learn}</h5>
      </div>
      <div className="card-footer">
        
        <ConnectionButton
          aria-label="connect-button"
          onClick={handleConnectClick}
        />
        {/* <MessageButton
          aria-label="message-button"
          onClick={handleMessageClick}
        /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProfileCard;
