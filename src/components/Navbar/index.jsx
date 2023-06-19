// Navbar/index.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const user = localStorage.getItem('username')
  // const navigate = useNavigate();
  const logoutbtn = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    // navigate('/')
  }
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Logo
      </Link>
      <div className="navbar-links">
       
        {!user &&
          (
            <div>
              <Link to="/login"> LogIn </Link>
              <Link to="/register"> Register </Link>
            </div>
          )
        }
        {user &&
          (
            <div>
              <Link to="/profile">Profile</Link>
              <Link to='/chat'>Chat</Link>
              <Link onClick={logoutbtn} to="/" >Logout</Link>
              <Link to="/profile">Connections</Link>
            </div>
          )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
