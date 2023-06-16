import React, { useState, useEffect } from "react";
import Select from "react-select";
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
// import "../../styles.css";
// import "./Chatbot.css";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: "You are a chatbot translater. You job is to translate the message into the selected language and provide the english to so the user can see both languages to help them learn. ",
};
function Chatbot({ onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    //Could use the API?
    const fetchedLanguageOptions = [
      { value: "fr", label: "French" },
      { value: "de", label: "German" },
      { value: "es", label: "Spanish" },
      { value: "it", label: "Italian" },
    ];
  
  setLanguageOptions(fetchedLanguageOptions);
}, []);

  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I am LinguaBot. I am here to help you translate your messages while you game. Select your langauge to get started!",
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
      languauge: selectedLanguage.value,
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
      language: selectedLanguage.value,
    };
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });
  
      if (!response.ok) {
        throw new Error("API Error: " + response.status);
      }
  
      const data = await response.json();
  
      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
        },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error(error);
    }
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
            <ChatContainer className="chat-container"
            style={{ height: "400px" }}>
              <MessageList
                scrollBehavior="smooth"
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
                  <Message key={i} model={message}
                  className={message.sender === "user" ? "user-message" : "bot-message"} />
                ))}
              </MessageList>
              {/* <div className="cs-message__content"></div> */}
              <MessageInput
                className="message-input"
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
          <button onClick={handleClose} style={{ position: "fixed", bottom: "405px", right: "20px"}}>Close</button>
        </div>
      ) : (
        <div className="chat-icon-container" onClick={handleChatIconClick}>
          <ChatIcon />
        </div>
      )}
      {chatVisible && (
        <div className= "languauge-dropdown-container" style={{ position: "fixed", bottom: "405px", right: "685px"}}>
          <Select
          options={languageOptions}
            value = {selectedLanguage}
            onChange = {setSelectedLanguage}
            placeholder = "Select Language"
          />
          </div>
      )}
    </div>
  );
}
export default Chatbot;
