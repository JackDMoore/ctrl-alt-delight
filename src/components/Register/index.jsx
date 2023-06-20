import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');


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

  const gatherDetails = async (e) => {
    // e.preventDefault(); 
   
      
    try {
      const options = {
        username: username,
        password: password,
        name: name,
        email: email,
        profile_bio: "your bio"
      };
      const response = await axios.post(
        "https://linguaplaya-be.onrender.com/signup",
        options
      );
      if (response.status === 200) {
        // alert("User created :)");
        setErrorMessage("User created :)")
        localStorage.setItem("username", response.data.username);
        // localStorage.setItem("token", response.data.access_token);
        navigate("/register2");
      }
    } catch (error) {
      // Handle error

        setErrorMessage(error)
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Register Page</h1>

        <form className="register-form">
          <input
            type="text"
            aria-label="username input"
            placeholder="Enter Username"
            onChange={handleUsername}
            value={username}
            className="inputField"
            required
          />
          <input
            type="password"
            aria-label="password input"
            placeholder="Enter Password"
            onChange={handlePassword}
            value={password}
            className="inputField"
            required
          />
          <input
            type="text"
            aria-label="name input"
            placeholder="Enter Name"
            onChange={handleName}
            value={name}
            className="inputField"
            required
          />
          <input
            type="email"
            aria-label="email input"
            placeholder="Enter Email"
            onChange={handleEmail}
            value={email}
            className="inputField"
            required
          />
          <input type = "button"  value = "Register" className="register-btn" onClick={gatherDetails}
          />
           
          <div>
            {errorMessage && <div className="error"> {errorMessage}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
