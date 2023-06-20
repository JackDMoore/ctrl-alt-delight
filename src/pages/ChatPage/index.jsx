import React, {useState, useEffect} from 'react';
import * as component from '../../components'
import './index.css'

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([])
    
  
    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);
  
    return (
      <div className="chat">
        <component.ChatBar socket={socket} />
        <div className="chat__main">
          <component.ChatBody messages={messages} />
          <component.ChatFooter socket={socket} />
        </div>
      </div>
    );
  };
  
  export default ChatPage;
