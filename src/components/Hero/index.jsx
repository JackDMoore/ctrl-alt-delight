import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import "../../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Logo
      </Link>
      <div className="navbar-links">
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center flex-column">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">
            Welcome to LinguaPlay: Where Language Learning and Gaming Unite!
          </h1>
          <p className="text-center mb-4">
            Ready to level up your language skills? Join LinguaPlay and embark on an immersive learning adventure through gaming.
          </p>
          <Button variant="primary" className="get-started-button">
            Get Started
          </Button>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
