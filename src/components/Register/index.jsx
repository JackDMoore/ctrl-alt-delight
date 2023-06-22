import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './style.css'

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
    e.preventDefault(); 
   
    const bio = "your bio"
    try {
      const options = {
        username: username,
        password: password,
        name: name,
        email: email,
        profile_bio: bio
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

        <Form className="register-form" onSubmit={gatherDetails}>
          <Form.Group controlId="username">
          {/* <Form.Label>Username</Form.Label> */}
          <Form.Control
            aria-label = "Username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsername}
            className="inputField"
            required
          />
          </Form.Group> 
          <Form.Group controlId="password">
          {/* <Form.Label>password</Form.Label> */}
          <Form.Control
            aria-label = "Password"
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={handlePassword}
            className="inputField"
            required
          />
          </Form.Group> 
          <Form.Group controlId="name">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            aria-label = "Name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleName}
            className="inputField"
            required
          />
          </Form.Group> 
          <Form.Group controlId="email">
          {/* <Form.Label>email</Form.Label> */}
          <Form.Control
            aria-label = "Email"
            type="email"
            placeholder="Enter a email"
            value={email}
            onChange={handleEmail}
            className="inputField"
            required
          />
          </Form.Group> 
          <Button /*className="button-49"*/ role="button" type="submit" variant="primary"className="profile-btn mt-3"><span> Register</span>
          </Button>
          <div>
            {errorMessage && <div className="error"> {errorMessage}</div>}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
