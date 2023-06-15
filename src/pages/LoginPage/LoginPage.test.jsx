import React from "react";
import LoginPage from "./index";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("LoginPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders the register component", () => {
    const login = render(
      <Router>
        <LoginPage />
      </Router>
    );
    expect(login).toBeTruthy();
  });
});
