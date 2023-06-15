import React from 'react';
import { expect, it, afterEach, beforeEach, describe } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import Hero from './index';

describe("Hero component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Hero />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: Welcome to LinguaPlay: Where Language Learning and Gaming Unite!", () => {
    const heading = screen.getByText("Welcome to LinguaPlay: Where Language Learning and Gaming Unite!");
    expect(heading).toBeInTheDocument();
  });

  it("Displays a paragraph with text: Ready to level up your language skills? Join LinguaPlay and embark on an immersive learning adventure through gaming.", () => {
    const text = screen.getByText("Ready to level up your language skills? Join LinguaPlay and embark on an immersive learning adventure through gaming.");
    expect(text).toBeInTheDocument();
  });

  // it("Displays a button with text: Log in", () => {
  //   const button = screen.getByRole("button", { name: "Log in" });
  //   expect(button).toBeInTheDocument();
  // });
})