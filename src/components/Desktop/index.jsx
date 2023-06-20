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
        <h2>How to use LinguPlay</h2>
        <p>
          As you can see we have a lot of features to help you learn a new
          language. You can start by clicking on the "Start" button on the top
          left corner of the screen. This will take you to the main page where
          you can choose the language you want to learn. Once you have chosen
          the language you want to learn, you can start learning by clicking on
          the "Start" button. This will take you to the main page where you can
          choose the language you want to learn. Once you have chosen the
          language you want to learn, you can start learning by clicking on the
          "Start" button. This will take you to the main page where you can
          choose the language you want to learn.
        </p>
      </div>
    </div>
  );
};

export default Desktop;
