import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles.css";
import heroimg from "../../assets/heroimg.jpg";
import Navbar from "../Navbar";

const ParallaxImage = () => {
  return (
    <div className="parallax-image">
      <div
        className="parallax-image-layer"
        style={{
          backgroundImage: `url(${heroimg})`,
        }}
      ></div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="parallax-container">
        <ParallaxImage />
      </div>
      <Container className="container-hero">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <div className="overlay"></div>
          <h1 className="h1-hero">
            Welcome to LinguaPlaya: Where Language Learning and Gaming Unite!
          </h1>
          <p className="p-hero">
            Ready to level up your language skills? Join LinguaPlay and embark
            on an immersive learning adventure through gaming.
          </p>
          <Button variant="primary" className="get-started-button">
            <span>Get Started</span>
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
