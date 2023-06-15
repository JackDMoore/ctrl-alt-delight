import React from "react";
import { expect, it, afterEach, beforeEach, describe } from "vitest";
import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Login from "./index";

describe("LoginPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: Login Page", () => {
    const heading = screen.getByText("Login Page");
    expect(heading).toBeInTheDocument();
  });

  it("Displays a username input", () => {
    const usernameInput = screen.getByLabelText("username input");
    expect(usernameInput).toBeInTheDocument();
  });

  it("Displays a password input", () => {
    const passwordInput = screen.getByLabelText("password input");
    expect(passwordInput).toBeInTheDocument();
  });

  it("Displays a submit button", () => {
    const submitButton = screen.getByLabelText("submit button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Submit");
  });

  it("Displays text: Not registered?", () => {
    const text = screen.getByText("Not registered?");
    expect(text).toBeInTheDocument();
  });

  it("Displays text: Register here", () => {
    const text = screen.getByText("Register here");
    expect(text).toBeInTheDocument();
  });

  // it("Calls gatherDetails function on button click", () => {
  //   const gatherDetailsMock = expect.createSpy();

  //   const submitButton = screen.getByLabelText("submit button");

  //   submitButton.onclick = gatherDetailsMock;

  //   submitButton.dispatchEvent(new MouseEvent("click"));

  //   // Assertion for the mock function being called
  //   expect(gatherDetailsMock).to.be.called();
  //   });
});
