import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "../../styles.css";
import image1 from "../../assets/gamingpic2.jpeg";
import image2 from "../../assets/gamingpic12.jpeg";
import flag1 from "../../assets/french.png";
import flag2 from "../../assets/germany.png";
import flag3 from "../../assets/portugal.png";

const WhatIsLinguaPlay = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(null);

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedFlag(null);
    setShowModal(false);
  };

  return (
    <div className="whatislinguaplay-container">
      <Container>
        <h1 className="whatislinguaplay-heading">What is LinguaPlay?</h1>
        <p className="whatislinguaplay-paragraph">
          LinguaPlay is a language learning platform that combines the power of
          gaming with immersive language education. Our mission is to make
          learning languages fun, engaging, and effective for learners of all
          ages and proficiency levels.
        </p>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="whatislinguaplay-image-container">
              <img
                src={image1}
                alt="Image 1"
                className="whatislinguaplay-image"
              />
              <div className="whatislinguaplay-image-overlay">
                <p className="whatislinguaplay-image-text">
                  Rachel is a native English speaker. She wants to work on her
                  French
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="whatislinguaplay-image-container">
              <img
                src={image2}
                alt="Image 2"
                className="whatislinguaplay-image"
              />
              <div className="whatislinguaplay-image-overlay">
                <p className="whatislinguaplay-image-text">
                  Alice is a native German speaker. She wants to work on her
                  Spanish
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            <h2 className="text-center">I Want to Practice</h2>
          </Col>
          <Col xs={12} className="text-center">
            <div className="flags-container">
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag1")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag1} alt="Flag 1" className="flag-image" />
                {selectedFlag === "flag1" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag2")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag2} alt="Flag 2" className="flag-image" />
                {selectedFlag === "flag2" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag3")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag3} alt="Flag 3" className="flag-image" />
                {selectedFlag === "flag3" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag3")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag3} alt="Flag 3" className="flag-image" />
                {selectedFlag === "flag3" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag3")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag3} alt="Flag 3" className="flag-image" />
                {selectedFlag === "flag3" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag3")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag3} alt="Flag 3" className="flag-image" />
                {selectedFlag === "flag3" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      How to tell your language level Beginner Pick the Beginner
                      level if you are making your first steps in the language.
                      You might not speak a single word, or already know some
                      basics, like how to introduce yourself or ask for
                      directions. If you are familiar with the Common European
                      Framework of Reference for Languages, this equals levels
                      A1 and A2. Intermediate Pick the Intermediate level if you
                      have basic confidence speaking the language. You can go
                      shopping, make plans with others, talk about your travels
                      and describe the plot of your favorite movie. If you are
                      familiar with the Common European Framework of Reference
                      for Languages, this equals level B1. Advanced Pick the
                      Advanced level if you are very confident speaking the
                      language. You can have spontaneous and fluent
                      conversations with native speakers, understand the news
                      and use the language effectively for work and studies. If
                      you are familiar with the Common European Framework of
                      Reference for Languages, this equals levels B2 and up.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatIsLinguaPlay;
