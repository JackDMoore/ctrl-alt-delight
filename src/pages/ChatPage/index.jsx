import React, { useState, useEffect, useRef } from 'react';
import * as component from '../../components';
import './index.css';

const ChatPage = ({ socket }) => {
  // const [currentRoom, setCurrentRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [typingStatus, setTypingStatus] = useState("")
  const lastMessageRef = useRef(null);

  useEffect(()=> {
    socket.on("messageResponse", data => setMessages([...messages, data]))
  }, [socket, messages])

  useEffect(()=> {
    socket.on("typingResponse", data => setTypingStatus(data))
  }, [socket])

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages]);

  useEffect(() => {
    socket.on('roomJoined', (room) => setCurrentRoom(room.name));
    socket.on('roomLeft', () => setCurrentRoom(''));
  }, [socket]);


  return (
    <div className="chat">
      <div className="chat__main">
        <component.ChatBody messages={messages} typingStatus={typingStatus} lastMessageRef={lastMessageRef}/>
        <component.ChatFooter socket={socket}  />
      </div>
    </div>
  );
};

export default ChatPage;
