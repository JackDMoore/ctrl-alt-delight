import React from "react";
import { useState } from "react";
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

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleLanguageUserSpeaks(e) {
    setLanguageUserSpeaks(e.target.value);
  }

  function handleLanguageToLearn(e) {
    setLanguageToLearn(e.target.value);
  }

  function handleGames(e) {
    setGames(e.target.value);
  }

  function handleConsole(e) {
    setConsole(e.target.value);
  }

  async function gatherDetails(e) {
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
      if (response.status == 201) {
        alert("User created :)");
        navigate("/login");
      }
    } catch (error) {
      // alert(response.error);
    }
  }

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
        ></input>
        <input
          type="password"
          aria-label="password input"
          placeholder="Enter Password"
          onChange={handlePassword}
          value={password}
          className="inputField"
        ></input>
        <input
          type="text"
          aria-label="name input"
          placeholder="Enter Name"
          onChange={handleName}
          value={name}
          className="inputField"
        ></input>
        <input
          type="email"
          aria-label="email input"
          placeholder="Enter Email"
          onChange={handleEmail}
          value={email}
          className="inputField"
        ></input>
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
          aria-label="language you'd like to learn"
          className="languageDropdown"
          onChange={handleLanguageToLearn}
          value={languageToLearn}
        >
          <option value="">Select the language you'd like to learn</option>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="dutch">Dutch</option>
          <option value="italian">Italian</option>
        </select>
        <select
          aria-label="Game you play"
          className="gamesDropdown"
          onChange={handleGames}
          value={games}
        >
          <option value="">Select the game you play</option>
          <option value="GTA5">GTA5</option>
          <option value="CoD">CoD</option>
          <option value="Total War">Total War</option>
          <option value="FIFA">FIFA</option>
          <option value="Squad">Squad</option>
        </select>
        <select
          aria-label="Console you play"
          className="consoleDropdown"
          onChange={handleConsole}
          value={console}
        >
          <option value="">Select the console you play</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
          <option value="PC">PC</option>
        </select>
        <br />
        <button
          onClick={gatherDetails}
          id="submitBtn"
          aria-label="submit button"
        >
          Submit
        </button>
        <p>
          Already registered?{" "}
          <a href="/login" style={{ color: "#FF8E3C" }}>
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
