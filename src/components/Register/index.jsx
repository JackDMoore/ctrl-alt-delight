import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [languageUserSpeaks, setLanguageUserSpeaks] = useState("");
  const [languageToLearn, setLanguageToLearn] = useState("");
  const [games, setGames] = useState("");
  const [console, setConsole] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

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
        // languageUserSpeaks: languageUserSpeaks,
        // languageToLearn: languageToLearn,
        // games: games,
        // console: console,
      };
      const response = await axios.post(
        "https://linguaplaya-be.onrender.com/signup",
        options
      ); 
      if (response.status == 200) {
        alert("User created :)");
        navigate("/login");
      }
    } catch (error) {
      // alert(response.error);
    }
  };

  return (
    <div className="input-component">
      <h1>Register Page</h1>

      <form className="inputs">
        <input
          type="text"
          aria-label="username input"
          placeholder="Enter Username"
          onChange={handleUsername}
          value={username}
          className="inputField"
        />
        <input
          type="password"
          aria-label="password input"
          placeholder="Enter Password"
          onChange={handlePassword}
          value={password}
          className="inputField"
        />
        <input
          type="text"
          aria-label="name input"
          placeholder="Enter Name"
          onChange={handleName}
          value={name}
          className="inputField"
        />
        <input
          type="email"
          aria-label="email input"
          placeholder="Enter Email"
          onChange={handleEmail}
          value={email}
          className="inputField"
        />
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

        <button className="btn" onClick={gatherDetails}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
