import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChatIcon from "../ChatIcon";
import Chatbot from "../Chatbot";
import Navbar from "../Navbar";

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
      <Navbar />

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url(https://media.gq-magazine.co.uk/photos/645b5c31d8c083bf85029042/3:2/w_1620,h_1080,c_limit/100-best-games-hp-b.jpg)",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></div>
      <header
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "9999",
        }}
      >
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
