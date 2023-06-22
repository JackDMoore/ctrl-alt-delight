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

const API_KEY = "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";

function ChatLearningPlan() {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm LinguaBot! Please select the language you'd like for your learning plan as well as your skill level and for how many days. Ready?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
  const [selectedNumDay, setSelectedNumDay] = useState("");

  const systemMessage = {
    role: "system",
    content: `Make a learning plan for the user learning the language ${selectedLanguage}. Their skill level is ${selectedSkillLevel} day and the plan should be for ${selectedNumDay} days. Don't ask them for additional information, use the info in your system. Create the plan as soon as the user says they're ready.`,
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

  const handleSkillChange = (event) => {
    setSelectedSkillLevel(event.target.value);
  };

  const handleNumDayChange = (event) => {
    setSelectedNumDay(event.target.value);
  };

  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <select data-testid="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">Select the language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Dutch">Dutch</option>
            <option value="Italian">Italian</option>
          </select>
        </div>
        <div>
          <select data-testid="skill" value={selectedSkillLevel} onChange={handleSkillChange}>
            <option value="">Select your skill level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div>
          <select data-testid="days" value={selectedNumDay} onChange={handleNumDayChange}>
            <option value="">Select number of days</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <MainContainer>
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

export default ChatLearningPlan;
