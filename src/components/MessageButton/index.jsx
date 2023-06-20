import React from "react";

const MessageButton = ({onClick}) => {
    return (
        <button className="message-button" onClick={onClick}>
        Message
        </button>
    );
}

export default MessageButton;
