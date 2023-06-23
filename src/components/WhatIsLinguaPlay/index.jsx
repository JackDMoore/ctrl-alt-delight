import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import image1 from "../../assets/gamingpic2.jpeg";
import image2 from "../../assets/gamingpic12.jpeg";
import flag1 from "../../assets/worldlang.png";

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
        <h1 className="whatislinguaplay-heading">What is LinguaPlaya?</h1>
        <p className="whatislinguaplay-paragraph">
          LinguaPlaya is a language learning platform that combines the power of
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
          <Col xs={12} className="text-center">
            <div className="linguaplaya-container">
              <h1>Global Connection</h1>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif"
                alt="Linguaplaya"
                className="linguaplaya-gif"
              />
            </div>
            <div className="flags-container">
              <h2>Explore the world, connect with new and existing people</h2>
              <h4>Connect - Play - Learn</h4>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag1")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag1} alt="Flag 1" className="flag-image" />
                {selectedFlag === "flag1" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      Language learning is a rewarding journey that can be
                      pursued at various levels of proficiency. Beginner Level:
                      At the beginner level, learners are introduced to the
                      fundamentals of a language. They focus on building
                      vocabulary, mastering basic grammar rules, and developing
                      essential communication skills. Beginners often engage in
                      activities such as simple conversations, reading basic
                      texts, and practicing common phrases. Intermediate Level:
                      As learners progress to the intermediate level, they
                      expand their language skills further. They deepen their
                      understanding of grammar and vocabulary, enhance their
                      listening and speaking abilities, and begin to comprehend
                      more complex texts. Intermediate learners can engage in
                      discussions, express opinions, and understand the main
                      ideas of moderately challenging content. Advanced Level:
                      At the advanced level, learners have a high level of
                      proficiency in the language. They have a wide vocabulary,
                      strong grasp of grammar, and can understand and produce
                      complex texts. Advanced learners can engage in nuanced
                      conversations, express themselves fluently, and comprehend
                      a variety of authentic materials, including literature,
                      news, and academic texts. Regardless of the level,
                      language learning requires dedication, practice, and
                      exposure to authentic resources such as books, movies, and
                      conversations with native speakers. It is a continuous
                      process that opens doors to new cultures, opportunities,
                      and connections with people from around the world
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
