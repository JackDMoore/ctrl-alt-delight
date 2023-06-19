// Navbar/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const user = localStorage.getItem('username')

  const logoutbtn = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
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
              <Link onClick={logoutbtn} >Logout</Link>
              <Link to="/profile">Connections</Link>
            </div>
          )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
