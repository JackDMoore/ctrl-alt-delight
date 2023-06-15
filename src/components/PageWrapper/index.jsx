import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChatIcon from "../ChatIcon";

const styles = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
});

const PageWrapper = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const handleChatIconClick = () => {
    setChatVisible(true);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" id="link" style={styles}>
            Home
          </NavLink>
          <NavLink to="login" id="link" style={styles}>
            Login
          </NavLink>
          <NavLink to="register" id="link" style={styles}>
            Register
          </NavLink>
        </nav>
        <ChatIcon onClick={handleChatIconClick} />
      </header>
      <Outlet />
    </>
  );
};

export default PageWrapper;
