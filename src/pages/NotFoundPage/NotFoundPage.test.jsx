import React from "react";

import NotFoundPage from "./index";

import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Not Found Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <NotFoundPage />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: 404: Page not found", () => {
    const heading = screen.getByText("404: Page not found");
    expect(heading).toBeInTheDocument();
  });

  it("Displays a link with text: Return Home", () => {
    const heading = screen.getByText("Return Home");
    expect(heading).toBeInTheDocument();
  });
});
