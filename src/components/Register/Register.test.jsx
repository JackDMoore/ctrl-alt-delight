import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import axios from "axios";

import Register from ".";

describe("Register Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: Register Page", () => {
    const heading = screen.getByText("Register Page");
    expect(heading).toBeInTheDocument();
  });

});
