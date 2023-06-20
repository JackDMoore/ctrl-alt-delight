import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './style.css'
import avadef from '../../assets/pfp/avadef.jpg'
// import { useCurrentUser } from "../../context/AuthContext";

const ProfilePage = () => {
  const [learn, setLearn] = useState("");
  const [known, setKnown] = useState("");
  const [name, setName] = useState("");
  const [email,setEmail] = useState("")
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("");
  const [profile_bio,setBio] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");


  const [user,setUser] = useState('')

  const User = localStorage.getItem("username")
  const Token= localStorage.getItem("token")
  async function getCurrentUser(){
    await fetch(`https://linguaplaya-be.onrender.com/users/all/${User}`,{
    method:'GET',
    headers: {
      "Content-Type":"application/json",
       Authorization: `Bearer ${Token}`,
    },
    params: {}
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setUser((data))
      setPlatform(data.platform);
      setLearn(data.language_learn)
      setKnown(data.language_known)
      // setEmail(data.users.email);
      setUsername(data.username);
      setBio(data.profile_bio)
    })
  }
  // const userarr = Array.from(user)
  const currentUser = user
  // useEffect to update the form fields when userInfo changes
  useEffect(() => {
    getCurrentUser()

  }, []);

  if (currentUser ===undefined){
    return null
}


  const deleteuseraccount = async () => {
    await fetch(`https://linguaplaya-be.onrender.com/users/${User}`,{
      method:'DELETE',
      headers: {
        "Content-Type":"application/json",
         Authorization: `Bearer ${Token}`,
      }
      })
      .then(res => res.json()) // or res.json()
      .then(res => {console.log(res) 
      localStorage.removeItem('username')
      localStorage.removeItem('token')}) 
  }
  function showupdate() {
    var x = document.getElementById("updateform")
    var y = document.getElementById("userinfo")
    var z = document.getElementById("editbtn")
    var a = document.getElementById("backbtn")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "block";

    } else{
      x.style.display = "none"
      y.style.display = "block";
      z.style.display = "block";
      a.style.display = "none"
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    // } else {
      try {
        await fetch(`https://linguaplaya-be.onrender.com/users/${User}`,{
          method:'PATCH',
          headers: {
            "Content-Type":"application/json",
            //  Authorization: `Bearer ${Token}`,
          },body: JSON.stringify({
              'name' : name,
              'username':username,
              'email': email,
              'profile_bio':profile_bio,
            })
          })
          .then((res)=>res.json())
          .then((data)=>{
            setUser(data.users)
            localStorage.username = data.users[0].username
            showupdate()
          })
        toast.success("Profile updated successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    //}
  };


  return (
    <div className="profile-container">
      <div className="profile-box">
        <h1 className="profile-heading">Your Profile</h1>
        <div id = "userinfo">
              {currentUser && (
                <div className="deets"> 
                  <h3 className="minititle">Profile Information</h3><button id = "editbtn" onClick= {showupdate}> edit</button>
                  <div className="pfpname">
                    <img src={avadef} alt="Avatar" className="avatar"></img>
                    {/* <p id = "currentName">Name: {currentUser.name}</p> */}
                    <h3 id = "currentUsername">{currentUser.username}</h3>
                  </div>
                  <p id = "currentrating">Rating: {currentUser.rating}</p>
                  <p id = "currentknown">Your Languages: {currentUser.language_known}</p>
                  <p id = "currentlearn">Learning: {currentUser.language_learn}</p>
                  <h2>Bio</h2>
                  <p id = "currentBio">{currentUser.profile_bio}</p>
                  {/* <p id = "currentLangKnwon">{currentUser.langugues_known}</p> */}
                </div>
                )
              }
        </div>
        
          <div id="updateform">
            <button id = "backbtn" onClick= {showupdate}>Go back</button>
                <Form  onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    className="inputField"
                  />
                  </Form.Group>
                  <Form.Group controlId="name">
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputField"
                  />
                  </Form.Group> 
                  <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputField"
                  />
                </Form.Group>
                <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="inputField"
                />
                </Form.Group> 
                <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="inputField"
                />
              </Form.Group>
              <Form.Group controlId="bio">
                <Form.Label>Profile Bio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a bio"
                  value={profile_bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="inputField"
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="profile-btn mt-3">
                Update
              </Button>
            </Form>
          </div>
        {/* <button className= "deletebutton" onClick={deleteuseraccount}>Delete account?</button> */}
        
        <div className="friendlist-container"></div> 
      </div>
    </div>
  )      
};

export default ProfilePage;

