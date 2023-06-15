import React from "react";
import HomePage from "./index";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("HomePage", () => {
  beforeEach(() => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders the register component", () => {
    const homePage = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(homePage).toBeTruthy();
  });
});
