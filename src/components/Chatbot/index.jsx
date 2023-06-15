import React, { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
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
const API_KEY = "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";
const systemMessage = {
  role: "system",
  content: "Translate my messages to French, provide the English too.",
};
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
    onClose();
  };
  return (
    <div className="App">
      {chatVisible ? (
        <div style={{ position: "fixed", bottom: "0", right: "20px" }}>
          <MainContainer>
            <ChatContainer className="chat-container">
              <MessageList
                className="message-list"
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
