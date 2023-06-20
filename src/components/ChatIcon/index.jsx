import React from "react";
import chaticon from "./chatboticon.png";
import "./chatbot.css"

function ChatIcon({ onClick }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img className="Chatboticon" src={chaticon} alt="Chat Icon" />
    </div>
  );
}

export default ChatIcon;
