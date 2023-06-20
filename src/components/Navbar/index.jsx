// Navbar/index.jsx

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {

  const token = localStorage.getItem('token')
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
       
        {(!token)  &&
          (
            <div>
              <Link to="/login"> LogIn </Link>
              <Link to="/register"> Register </Link>
            </div>
          )
        }
        {(token) &&
          (
            <div>

              <Link to="/profile">Profile</Link>
              <Link to='/chat'>Chat</Link>
              <Link onClick={logoutbtn} to="/" >Logout</Link>
              <Link to="/connections">Connections</Link>

            </div>
          )
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
