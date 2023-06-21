import React from "react";

const MessageButton = ({onClick}) => {
    return (
        <button className="message-button" onClick={onClick}>
        <span>Message</span>
        </button>
    );
}

export default MessageButton;
