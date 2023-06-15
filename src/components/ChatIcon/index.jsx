import React from 'react';

function ChatIcon({ onClick }) {
    return (
        <div
            style={{ position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }}
            onClick={onClick}
        >
            <img src=" " alt="Chat Icon" />
        </div>
    );
}

export default ChatIcon;
