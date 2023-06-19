import React from "react";
import ConnectionsPage from "./index";
import { MemoryRouter as Router } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("ConnectionPage", () => {
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

  it("Displays a heading with text: Connections Page", () => {
    const heading = screen.getByText("Connections Page");
    expect(heading).toBeInTheDocument();
  });

  it("Renders the UserList component", () => {
    const userList = render(
      <Router>
        <UserList />
      </Router>
    );
    expect(userList).toBeTruthy();
  });
});