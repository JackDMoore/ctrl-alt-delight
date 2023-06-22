import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logonav.png";

import "./style.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");

  const logoutbtn = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navbar-links">
        {!user && (
          <div>
            <Link to="/login"> LogIn |</Link>
            <Link to="/register"> Register | </Link>
          </div>
        )}
        {user && (
          <div>
            <Link to="/chat"> Chat |</Link>
            <Link to="/connections"> Connections |</Link>
            <Link to="/chatquiz"> Quiz |</Link>
            <Link to="/chatlearningplan"> Learning Plan |</Link>
            <Link to="/profile"> Profile |</Link>
            <Link onClick={logoutbtn} to="/">
              {" "}
              Logout{" "}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
