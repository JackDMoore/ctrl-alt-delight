import React from "react";
import ConnectionsPage from "./index"
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("ConnectionsPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <ConnectionsPage />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: Find a Connection", () => {
    const heading = screen.getByText("Find a Connection");
    expect(heading).toBeInTheDocument();
  });

  it("Renders the UserList component", () => {
    const connectionsPage = render(
      <Router>
        <ConnectionsPage />
      </Router>
    );
    expect(connectionsPage).toBeTruthy();
  });
});