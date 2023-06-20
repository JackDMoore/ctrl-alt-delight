import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles.css";
import image1 from "../../assets/gamingpic2.jpeg";
import image2 from "../../assets/gamingpic12.jpeg";

const WhatIsLinguaPlay = () => {
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
                  Alice s a native Germany speaker. She wants to work on her
                  Spanish
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatIsLinguaPlay;
