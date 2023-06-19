import React from "react";

const ConnectionButton = ({onClick}) => {
    return (
        <button className="connect-button" onClick={onClick}>
        Connect
        </button>
    );
    }

export default ConnectionButton;
