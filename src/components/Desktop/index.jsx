import React from "react";
import gifImage from "../../assets/desktop.gif";
import "../../styles.css";

const Desktop = () => {
  return (
    <div className="desktop-container">
      <div className="gif-container">
        <img src={gifImage} alt="Gif" className="gif-image" />
      </div>
      <div className="text-container">
        <h2>How to use LinguaPlaya</h2>
        <p>
          Millions of language partners. Any language combination. Join the
          community and start practicing with native speakers. Find people with
          similar interests and learn together. Start practicing now. Register
          for free. Login in and find a language partner. Ask our language
          chatbot to help translate your messages. choose your level, beginner,
          intermediate or advanced.
        </p>
      </div>
    </div>
  );
};

export default Desktop;
