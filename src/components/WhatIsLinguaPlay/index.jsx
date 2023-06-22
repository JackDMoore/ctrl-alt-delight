import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "../../styles.css";
import image1 from "../../assets/gamingpic2.jpeg";
import image2 from "../../assets/gamingpic12.jpeg";
import flag1 from "../../assets/french.png";
import flag2 from "../../assets/germany.png";
import flag3 from "../../assets/portugal.png";
import flag4 from "../../assets/sweden.png";
import flag5 from "../../assets/spanish.png";
import flag6 from "../../assets/english.png";
import Linguaplaya from "../../assets/Linguaplaya.gif";

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
          <Col xs={12} className="text-center">
            <div className="linguaplaya-container">
              <img
                src={Linguaplaya}
                alt="Linguaplaya"
                className="linguaplaya-gif"
              />
            </div>
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
                      French is a captivating and widely spoken language that
                      carries a rich cultural heritage. As the official language
                      of more than 29 countries and an important language of
                      diplomacy, French holds a significant global influence.
                      Known for its elegance and melodious nature, the French
                      language is admired for its romantic expressions and
                      precise articulation. It has played a prominent role in
                      literature, philosophy, art, and cuisine, shaping the
                      cultural fabric of the Francophone world. Learning French
                      opens doors to a vibrant world of literature, cinema,
                      music, and intellectual discourse, while also fostering
                      connections with diverse communities across continents.
                      Whether for professional or personal growth, exploring the
                      French language offers a rewarding journey into a
                      captivating linguistic and cultural universe.
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
                      German, a language renowned for its precision and
                      efficiency, holds a prominent position as one of the major
                      languages in Europe. Spoken by millions of people in
                      Germany, Austria, Switzerland, and other parts of Central
                      Europe, German is characterized by its distinct
                      pronunciation and intricate grammar. With a rich literary
                      tradition that includes the works of famous writers like
                      Goethe and Kafka, German offers a gateway to exploring
                      profound philosophical ideas and intellectual discourse.
                      Known for its contributions to fields such as engineering,
                      science, and music, German is a language of innovation and
                      cultural significance. Discovering German opens doors to a
                      world of technological advancements, captivating
                      literature, and a vibrant blend of modernity and
                      tradition.
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
                      Portuguese, a language brimming with warmth and poetic
                      beauty, is spoken by millions across Portugal, Brazil, and
                      various Portuguese-speaking countries in Africa and Asia.
                      With its roots in Latin, Portuguese shares similarities
                      with Spanish and Italian while possessing its unique
                      charm. The language is renowned for its musicality,
                      expressive nature, and lyrical nuances. From the
                      mesmerizing sounds of fado music to the works of
                      celebrated authors like Fernando Pessoa, Portuguese offers
                      a captivating cultural journey. Embracing Portuguese not
                      only enables communication with diverse communities but
                      also allows for an exploration of vibrant literature,
                      enchanting landscapes, and the rich history of
                      Portuguese-speaking nations.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag4")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag4} alt="Flag 4" className="flag-image" />
                {selectedFlag === "flag4" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      Swedish, a language spoken by over 10 million people in
                      Sweden and parts of Finland, is known for its melodic
                      tones and rhythmic patterns. With a reputation for
                      simplicity and clarity, Swedish captivates learners with
                      its elegant yet straightforward grammar and pronunciation.
                      The language holds a significant place in Scandinavian
                      literature, showcasing notable authors such as Astrid
                      Lindgren and August Strindberg. Swedish also provides
                      access to the world of Nordic cinema, design, and a
                      society known for its social welfare and environmental
                      consciousness. Exploring Swedish offers the opportunity to
                      delve into a modern, progressive culture while unraveling
                      the mysteries of a captivating linguistic landscape.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag5")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag5} alt="Flag 5" className="flag-image" />
                {selectedFlag === "flag5" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      Spanish, a widely spoken language with more than 460
                      million speakers worldwide, carries the vibrancy of
                      diverse cultures across the globe. From the passionate
                      rhythms of flamenco to the magical realism found in the
                      works of renowned authors like Gabriel Garcia Marquez,
                      Spanish exudes an aura of romance, artistry, and
                      storytelling. As the official language of numerous
                      countries in Latin America and Spain, it opens doors to
                      vibrant traditions, captivating literature, and dynamic
                      communities. Learning Spanish provides a deeper connection
                      to a rich heritage, enhanced travel experiences, and the
                      ability to engage with a global network of Spanish
                      speakers.
                    </p>
                  </div>
                )}
              </div>
              <div
                className="flag-container"
                onMouseEnter={() => setSelectedFlag("flag6")}
                onMouseLeave={() => setSelectedFlag(null)}
              >
                <img src={flag6} alt="Flag 6" className="flag-image" />
                {selectedFlag === "flag6" && (
                  <div className="flag-dropdown">
                    <p className="flag-dropdown-text">
                      English, a global language with over 1.5 billion speakers,
                      holds a position of unparalleled importance in today's
                      interconnected world. As the language of international
                      communication, business, and popular culture, English
                      serves as a bridge connecting people from different
                      backgrounds and cultures. Its versatility and widespread
                      usage make it an essential tool for global travel,
                      education, and career opportunities. From classic
                      literature by Shakespeare and Dickens to contemporary
                      films and music, English offers an immersive experience
                      into a vast cultural tapestry. Embracing English unlocks a
                      wealth of knowledge, fosters cross-cultural understanding,
                      and facilitates meaningful connections on a global scale.
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
