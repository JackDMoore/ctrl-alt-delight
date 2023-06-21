import React, { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import ChatIcon from "../ChatIcon";
import "../../styles.css";

const API_KEY = "";

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I am LinguaBot. I am here to help you translate your messages while you game. Type your language and let's get started!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const systemMessage = {
    role: "system",
    content: `Translate the user input to ${selectedLanguage}. Also show the English translation in brackets after`,
  };

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  const handleChatIconClick = () => {
    setChatVisible(true);
  };

  const handleClose = () => {
    setChatVisible(false);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  useEffect(() => {
    // Close the chatbot when the component is unmounted
    return () => {
      setChatVisible(false);
    };
  }, []);

  return (
    <div className="App">
      {chatVisible && (
        <div
          className="chat-container"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "9999",
          }}
        >
          <MainContainer>
            <label>
              Select language
              <select value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Dutch">Dutch</option>
                <option value="Italian">Italian</option>
              </select>
            </label>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator
                      className="typing-indicator"
                      content="LinguaBot is typing"
                    />
                  ) : null
                }
              >
                {messages.map((message, i) => (
                  <Message key={i} model={message} />
                ))}
              </MessageList>
              <MessageInput
                className="message-input"
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
            <button className="chatbot-b" onClick={handleClose}>
              Close
            </button>
          </MainContainer>
        </div>
      )}
      {!chatVisible && (
        <div
          className="chat-icon-container"
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          onClick={handleChatIconClick}
        >
          <ChatIcon />
        </div>
      )}
    </div>
  );
}

export default Chatbot;
