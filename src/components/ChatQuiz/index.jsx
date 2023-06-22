import { useState } from "react";
import React from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./style.css";


const API_KEY = import.meta.env.VITE_SOME_API_KEY;

function ChatQuiz() {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm LinguaBot! Please select the language you'd like to be quizzed on and the difficulty",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestions] = useState("");

  const systemMessage = {
    role: "system",
    content: `Make a ${selectedNumQuestions} question quiz that teaches individual words from${selectedLanguage} at the ${selectedDifficulty}.The quiz should be in English. Give a score at the end. 1 question at a time that the user responds to. Start as soon as the user says they're ready`,
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
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
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

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setSelectedNumQuestions(event.target.value);
  };

  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">Select the language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Dutch">Dutch</option>
            <option value="Italian">Italian</option>
          </select>
        </div>
        <div>
          <select value={selectedDifficulty} onChange={handleDifficultyChange}>
            <option value="">Select the difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div>
          <select
            value={selectedNumQuestions}
            onChange={handleNumQuestionsChange}
          >
            <option value="">Select number of questions</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <MainContainer>
          <div>
            <select
              aria-label="Select Language"
              className="consoleDropdown"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Dutch">Dutch</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
          <div>
            <select
              aria-label="Select Difficulty"
              className="consoleDropdown"
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="LinguaBot is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default ChatQuiz;
