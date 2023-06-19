import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [languageUserSpeaks, setLanguageUserSpeaks] = useState("");
  const [languageToLearn, setLanguageToLearn] = useState("");
  const [games, setGames] = useState("");
  const [console, setConsole] = useState("");
  const navigate = useNavigate();

  const handleLanguageUserSpeaks = (e) => {
    setLanguageUserSpeaks(e.target.value);
  };

  const handleLanguageToLearn = (e) => {
    setLanguageToLearn(e.target.value);
  };

  const handleGames = (e) => {
    setGames(e.target.value);
  };

  const handleConsole = (e) => {
    setConsole(e.target.value);
  };

  const gatherDetails = async (e) => {
    e.preventDefault();
    try {
      const options = {
        username: username,
        password: password,
        name: name,
        email: email,
      };
      const response = await axios.post(
        "https://linguaplaya-be.onrender.com/signup",
        options
      );
      if (response.status === 200) {
        alert("Profile updated :)");
        navigate("/connections");
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Register Page</h1>
        <form className="register-form">
          <select
            aria-label="language you speak"
            className="languageDropdown"
            onChange={handleLanguageUserSpeaks}
            value={languageUserSpeaks}
          >
            <option value="">Select the language you speak</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="dutch">Dutch</option>
            <option value="italian">Italian</option>
          </select>
          <select
            aria-label="language you want to learn"
            className="languageDropdown"
            onChange={handleLanguageToLearn}
            value={languageToLearn}
          >
            <option value="">Select the language you want to learn</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="dutch">Dutch</option>
            <option value="italian">Italian</option>
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
            onChange={handleConsole}
            value={console}
            className="inputField"
          />

          <button className="register-btn" onClick={gatherDetails}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
