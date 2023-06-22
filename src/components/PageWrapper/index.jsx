import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChatIcon from "../ChatIcon";
import Chatbot from "../Chatbot";
import Navbar from "../Navbar";

const PageWrapper = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const handleChatIconClick = () => {
    setChatVisible(true);
  };

  const handleChatbotClose = () => {
    setChatVisible(false);
  };

  return (
    <div className="page-wrapper">
      <div className="background-animation"></div>
      <Navbar />
      <header className="header">
        <div className="header-content">
          <div className="btn-group my-5">
            <a
              href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip"
              className="btn btn-outline-light"
              aria-current="page"
            ></a>
            <a
              href="https://codepen.io/P1N2O/full/pyBNzX"
              className="btn btn-outline-light"
            >
              <i className="fas fa-expand ms-2"></i>
            </a>
          </div>
          <a
            href="https://manuel.pinto.dev"
            className="text-decoration-none"
          ></a>
        </div>
        <div className="header-overlay"></div>
      </header>
      <div className="content-wrapper">
        <Outlet />
      </div>
      <footer className="footer">
        <ChatIcon onClick={handleChatIconClick} />
        {chatVisible && <Chatbot onClose={handleChatbotClose} />}
      </footer>
    </div>
  );
};

export default PageWrapper;
