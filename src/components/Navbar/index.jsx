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
      <NavLink to="/" className="navbar-logo">
        Logo
      </NavLink>
      <div className="navbar-links">
       
        {(!token)  &&
          (
            <div>
              <NavLink to="/login"> LogIn </NavLink>
              <NavLink to="/register"> Register </NavLink>
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
        </>
  );
};

export default Navbar;
