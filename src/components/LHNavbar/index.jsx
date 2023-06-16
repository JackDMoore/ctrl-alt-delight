import React, { useState } from "react";
import "../../styles.css";

const LanguagesToLearn = ({ selectedLanguage, handleLanguageChange }) => {
  return (
    <div className="section">
      <h2>Language to Learn</h2>
      <div className="filter">
        <label>Filter by Language:</label>
        <div>
          <input
            type="radio"
            id="learnLanguageAll"
            name="learnLanguage"
            value=""
            checked={selectedLanguage === ""}
            onChange={handleLanguageChange}
          />
          <label htmlFor="learnLanguageAll">All</label>
        </div>
        <div>
          <input
            type="radio"
            id="learnLanguageEnglish"
            name="learnLanguage"
            value="english"
            checked={selectedLanguage === "english"}
            onChange={handleLanguageChange}
          />
          <label htmlFor="learnLanguageEnglish">English</label>
        </div>
        <div>
          <input
            type="radio"
            id="learnLanguageSpanish"
            name="learnLanguage"
            value="spanish"
            checked={selectedLanguage === "spanish"}
            onChange={handleLanguageChange}
          />
          <label htmlFor="learnLanguageSpanish">Spanish</label>
        </div>
        {/* Add more language options */}
      </div>
      {/* Add additional content for Language to Learn section */}
    </div>
  );
};

const LanguagesToTeach = ({ selectedLanguage, handleLanguageChange }) => {
  return (
    <div className="section">
      <h2>Language to Teach</h2>
      <div className="filter">
        <label>Filter by Language:</label>
        <div>
          <input
            type="radio"
            id="teachLanguageAll"
            name="teachLanguage"
            value=""
            checked={selectedLanguage === ""}
            onChange={handleLanguageChange}
          />
          <label htmlFor="teachLanguageAll">All</label>
        </div>
        <div>
          <input
            type="radio"
            id="teachLanguageEnglish"
            name="teachLanguage"
            value="english"
            checked={selectedLanguage === "english"}
            onChange={handleLanguageChange}
          />
          <label htmlFor="teachLanguageEnglish">English</label>
        </div>
        <div>
          <input
            type="radio"
            id="teachLanguageSpanish"
            name="teachLanguage"
            value="spanish"
            checked={selectedLanguage === "spanish"}
            onChange={handleLanguageChange}
          />
          <label htmlFor="teachLanguageSpanish">Spanish</label>
        </div>
        {/* Add more language options */}
      </div>
      {/* Add additional content for Language to Teach section */}
    </div>
  );
};

const GamesConsole = () => {
  return (
    <div className="section">
      <h2>Games/Console</h2>
      <div className="filter">
        <label>Filter by Console:</label>
        <div>
          <input type="checkbox" id="consolePS5" name="consolePS5" />
          <label htmlFor="consolePS5">PlayStation 5</label>
        </div>
        <div>
          <input type="checkbox" id="consoleXbox" name="consoleXbox" />
          <label htmlFor="consoleXbox">Xbox</label>
        </div>
        <div>
          <input type="checkbox" id="consoleNintendo" name="consoleNintendo" />
          <label htmlFor="consoleNintendo">Nintendo Switch</label>
        </div>
        {/* Add more console options */}
      </div>
      {/* Add additional content for Games/Console section */}
    </div>
  );
};

const LeftNavbar = () => {
  const [learnLanguage, setLearnLanguage] = useState("");
  const [teachLanguage, setTeachLanguage] = useState("");

  const handleLearnLanguageChange = (e) => {
    setLearnLanguage(e.target.value);
  };

  const handleTeachLanguageChange = (e) => {
    setTeachLanguage(e.target.value);
  };

  const handleSubmit = () => {
    // Perform any necessary actions upon submit
    // Redirect or update state as needed
  };

  return (
    <div className="left-navbar">
      <LanguagesToLearn
        selectedLanguage={learnLanguage}
        handleLanguageChange={handleLearnLanguageChange}
      />

      <LanguagesToTeach
        selectedLanguage={teachLanguage}
        handleLanguageChange={handleTeachLanguageChange}
      />

      <GamesConsole />

      <button className="connection-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LeftNavbar;
