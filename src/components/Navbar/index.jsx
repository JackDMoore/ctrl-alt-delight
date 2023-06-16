// Navbar/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Logo
      </Link>
      <div className="navbar-links">
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
