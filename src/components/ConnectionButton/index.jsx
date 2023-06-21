import React from "react";

const ConnectionButton = ({onClick}) => {
    return (
        <button className="connect-button" onClick={onClick}>
        <span>Connect</span>
        </button>
    );
    }

export default ConnectionButton;
