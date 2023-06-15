import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChatIcon from "../ChatIcon";
import Chatbot from "../Chatbot";

const styles = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
});

const PageWrapper = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const handleChatIconClick = () => {
    setChatVisible(true);
  };

  const handleChatbotClose = () => {
    setChatVisible(false);
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
        {chatVisible ? (
          <Chatbot onClose={handleChatbotClose} />
        ) : (
          <ChatIcon onClick={handleChatIconClick} />
        )}
      </header>
      <Outlet />
    </>
  );
};

export default PageWrapper;
