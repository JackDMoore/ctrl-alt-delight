import React from "react";
import chaticon from "./chaticon.png";

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
      <img src={chaticon} alt="Chat Icon" />
    </div>
  );
}

export default ChatIcon;
