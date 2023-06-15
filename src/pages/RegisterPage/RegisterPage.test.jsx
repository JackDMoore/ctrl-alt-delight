import React from "react";
import Register from "../RegisterPage/index";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("RegisterPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <Register />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders the register component", () => {
    const register = render(
      <Router>
        <Register />
      </Router>
    );
    expect(register).toBeTruthy();
  });
});
