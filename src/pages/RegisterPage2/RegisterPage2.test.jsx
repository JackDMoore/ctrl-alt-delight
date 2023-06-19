import React from "react";
import Register2 from "../RegisterPage2/index";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("RegisterPage2", () => {
  beforeEach(() => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders the register component", () => {
    const register2 = render(
      <Router>
        <Register2 />
      </Router>
    );
    expect(register2).toBeTruthy();
  });
});