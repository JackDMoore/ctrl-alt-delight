import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './style.css'
// import { useCurrentUser } from "../../context/AuthContext";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile_bio,setBio] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");


  const [user,setUser] = useState('')
  // const {user, password} = useCurrentUser()
  //const navigate = useNavigate();
  // const userInfo = user;

  const User = localStorage.getItem("username")
  const Token= localStorage.getItem("token")
  async function getCurrentUser(){
    await fetch(`https://linguaplaya-be.onrender.com/users/${User}`,{
    method:'GET',
    headers: {
      "Content-Type":"application/json",
       Authorization: `Bearer ${Token}`,
    },
    params: {}
    })
    .then((res)=>res.json())
    .then((data)=>{
      setUser((data.users))
      setName(data.users[0].name);
      setEmail(data.users[0].email);
      setUsername(data.users[0].username);
      setBio(data.users[0].profile_bio)
    })
  }
  const userarr = Array.from(user)
  const currentUser = userarr[0]
  // useEffect to update the form fields when userInfo changes
  useEffect(() => {
    getCurrentUser()

  }, []);
     // if (currentUser) {
    //   setName(currentUser.name);
    //   setEmail(currentUser.email);
    //   setUsername(currentUser.username);
    //   setBio(currentUser.profile_bio)
    // }
  if (currentUser ===undefined){
    return null
}

  //setPassword(currentUser.password)
  console.log(currentUser)
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
    var x = document.getElementById("updateform");
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
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
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
              // 'games':games,
              // 'languages_known' : languages_known,
              // 'languages_learn': languages_learn,
              // 'connections': connections
            })
          })
          .then((res)=>res.json())
          .then((data)=>{
            setUser(data.users)
            localStorage.username = data.users[0].username
            showupdate()
          })
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

  // const editUser = () => {
  //   if(contentEditable != contentEditable){
  //     contentEditable = 'false'
  //   }    
  // }

  //contentEditable="true"
  return (
    // <>
    // <UserProfile />
    // </>
    <div className="profile-container">
      <div className="profile-box">
        <h1 className="profile-heading">Your Profile</h1>
        <div id = "userinfo">
          {currentUser && (
          <div>
            <h3>Profile Information</h3>
            <p>Name: {currentUser.name}</p>
            <p>Username: {currentUser.username}</p>
            <p>Email: {currentUser.email}</p>
            <p>Bio: {currentUser.profile_bio}</p>
          </div>
        )}
        </div>
        
        <button id = "editbtn" onClick= {showupdate}> update account</button>
        <div id="updateform">
        <button id = "backbtn" onClick= {showupdate}>Go back</button>
            <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            {/* <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                //value={currentUser.password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputField"
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                // value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="inputField"
              />
            </Form.Group> */}
            <Button type="submit" variant="primary" className="profile-btn mt-3">
              Update
            </Button>
          </Form>
        </div>
        
      </div>
      {/* <button className= "deletebutton" onClick={deleteuseraccount}>Delete account?</button> */}
    </div>
  );
        
};

export default ProfilePage;

