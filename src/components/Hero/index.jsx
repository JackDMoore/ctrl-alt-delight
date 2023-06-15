import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">
            Welcome to LinguaPlay: Where Language Learning and Gaming Unite!
          </h1>
          <p className="text-center mb-4">
            Ready to level up your language skills? Join LinguaPlay and embark on an immersive learning adventure through gaming.
          </p>
          <div className="d-flex">
            <Button variant="primary" as={Link} to="/login" className="me-3">
              Log In
            </Button>
            <Button variant="secondary" as={Link} to="/register">
              Register
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
