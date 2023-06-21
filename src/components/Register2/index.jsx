import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register2 = () => {
  const [languageUserSpeaks, setLanguageUserSpeaks] = useState("");
  const [languageToLearn, setLanguageToLearn] = useState("");
  const [games, setGames] = useState("");
  const [platform, setPlatform] = useState("");
  const navigate = useNavigate();

  const [message, setMessage] = useState("")

  const handleLanguageUserSpeaks = (e) => {
    setLanguageUserSpeaks(e.target.value);
  };

  const handleLanguageToLearn = (e) => {
    setLanguageToLearn(e.target.value);
  };

  const handleGames = (e) => {
    setGames(e.target.value);
  };

  const handlePlatform = (e) => {
    setPlatform(e.target.value);
  };

  const gatherDetails = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    // const Token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://linguaplaya-be.onrender.com/users/games/${username}`,
        {
          game_name: games,
          platform: platform,
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${Token}`,
        //   },
        // }
      );

      await axios.post(
        `https://linguaplaya-be.onrender.com/users/language_learn/${username}`,
        {
          language_learn_name: languageToLearn,
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${Token}`,
        //   },
        // }
      );

      await axios.post(
        `https://linguaplaya-be.onrender.com/users/language_known/${username}`,
        {
          language_known_name: languageUserSpeaks,
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${Token}`,
        //   },
        // }
      );
      setMessage("Profile updated :)")
      // alert("Profile updated :)"); 
      navigate("/login");
    } catch (error) {

    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Complete Registration</h1>
        <form className="register-form">
          <select
            aria-label="language you speak"
            className="languageDropdown"
            onChange={handleLanguageUserSpeaks}
            value={languageUserSpeaks}
          >
            <option value="">Select the language you speak</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Dutch">Dutch</option>
            <option value="Italian">Italian</option>
          </select>
          <select
            aria-label="language you want to learn"
            className="languageDropdown"
            onChange={handleLanguageToLearn}
            value={languageToLearn}
          >
            <option value="">Select the language you want to learn</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Dutch">Dutch</option>
            <option value="Italian">Italian</option>
          </select>
          <input
            type="text"
            aria-label="games input"
            placeholder="Enter Games"
            onChange={handleGames}
            value={games}
            className="inputField"
          />
          <input
            type="text"
            aria-label="console input"
            placeholder="Enter Console"
            onChange={handlePlatform}
            value={platform}
            className="inputField"
          />

          <button className="register-btn" onClick={gatherDetails}>
           <span> Register</span>
          </button>
          {message && <div className="message"> {message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Register2;
