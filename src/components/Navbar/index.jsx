import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logonav.png";

import "./style.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username");
  const location = useLocation();

  const logoutbtn = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  const isActiveLink = (path) => {
    if (path === "/") {
      // Exclude the root page from comparison
      return location.pathname !== "/";
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navbar-links">
        {!user ? (
          <div>
            <Link
              to="/login"
              className={isActiveLink("/login") ? "active" : ""}
            >
              LogIn
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              to="/register"
              className={isActiveLink("/register") ? "active" : ""}
            >
              Register
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/chat"
              className={isActiveLink("/chat") ? "active" : ""}
            >
              Chat
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              to="/connections"
              className={isActiveLink("/connections") ? "active" : ""}
            >
              Connections
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              to="/chatquiz"
              className={isActiveLink("/chatquiz") ? "active" : ""}
            >
              Quiz
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              to="/chatlearningplan"
              className={isActiveLink("/chatlearningplan") ? "active" : ""}
            >
              Learning Plan
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              to="/profile"
              className={isActiveLink("/profile") ? "active" : ""}
            >
              Profile
            </Link>
            <span className="navbar-divider">|</span>
            <Link
              onClick={logoutbtn}
              to="/login"
              className={isActiveLink("/login") ? "active" : ""}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
