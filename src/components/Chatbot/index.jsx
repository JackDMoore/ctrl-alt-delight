import React, { useState, useEffect} from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import ChatIcon from '../ChatIcon';
import './Chatbot.css';

const API_KEY = "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";
// const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = { 
  "role": "system", "content": "Translate my messages to French, provide the English too."
}

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am LinguaBot. I am here to help you translate your messages while you game.!",
      sentTime: "just now",
      sender: "ChatGPT",
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
//add use state so chat is visble on screen
const [chatVisible, setChatVisible] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  const handleChatIconClick = () => {
    setChatVisible(true);
  };

  const handleClose = () => {
    onClose();
  };


  return (
    <div className="App">
      {chatVisible ? (
        <div style={{ position: 'fixed', bottom: '0', right: '20px' }}>
          <MainContainer>
            <ChatContainer className="chat-container">
              <MessageList className="message-list" typingIndicator={isTyping ? <TypingIndicator className="typing-indicator" content="LinguaBot is typing" /> : null}>
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput className="message-input" placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
          <button onClick={handleClose}>Close</button>
        </div>
      ) : (
        <div className="chat-icon-container" onClick={handleChatIconClick}>
          <ChatIcon />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
