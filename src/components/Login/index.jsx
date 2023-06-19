import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef()

  const navigate = useNavigate();
   useEffect(() => {
      inputRef.current.focus()
  },[])

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function gatherDetails(e) {
    e.preventDefault();
    try {
      const options = { username: username, password: password };
      const response = await axios.post(
        "https://linguaplaya-be.onrender.com/login",
        options
      ); //will need to add link here
      if (response.status == 200) {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem('username', response.data.username)
        navigate("/");
        // const value  = localStorage.getItem('username')
        // console.log(value)
        // axios.post(
        //     'http://localhost:3001/authenticate',
        //     { username: value }
        // )
        // onAuth({ username: value, secret: value })
      }
    } catch (error) {
      // alert(error.response.data.error);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Login Page</h1>

        <form className="login-form">
          <input
            type="text"
            aria-label="username input"
            placeholder="Enter Username"
            onChange={handleUsername}
            value={username}
            className="inputField"
            ref = {inputRef}
          ></input>
          <input
            type="password"
            aria-label="password input"
            placeholder="Enter Password"
            onChange={handlePassword}
            value={password}
            className="inputField"
            ref = {inputRef}
          ></input>
          <br />
          <button
            onClick={gatherDetails}
            id="submitBtn"
            aria-label="submit button"
            className="login-btn"
          >
            Submit
          </button>
          <p>
            Not registered?{" "}
            <a href="/register" style={{ color: "#FF8E3C" }}>
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
