import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user,setUser] = useState([])
  const navigate = useNavigate();
  const userInfo = user;

  const Token = localStorage.getItem("Token")
  
  async function getCurrentUser(){
    await fetch("https://linguaplaya-be.onrender.com/users",{
    method:'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
    })
    .then((res)=>res.json())
    .then((data)=>{
      setUser(data)
      console.log(data)
    })
  }
  console.log(user)
  // useEffect to update the form fields when userInfo changes
  useEffect(() => {
    getCurrentUser()
    // if (userInfo) {
    //   setName(userInfo.name);
    //   setEmail(userInfo.email);
    // }
  }, []);

  const userarr = Array.from(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        // Perform your updateProfile logic here
        // const response = await updateProfile({
        //   _id: userInfo._id,
        //   name,
        //   email,
        //   password,
        // });
        // Dispatch the action for updating user credentials
        // dispatch({ type: "UPDATE_USER_CREDENTIALS", payload: response });
        toast.success("Profile updated successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1 className="profile-heading">Update Profile</h1>

        {userInfo && (
          <div>
            <h3>Profile Information</h3>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputField"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputField"
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="inputField"
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="profile-btn mt-3">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
