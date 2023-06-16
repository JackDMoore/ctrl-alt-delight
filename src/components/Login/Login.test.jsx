import React from "react";
import { expect, it, afterEach, beforeEach, describe, vi } from "vitest";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Login from "./index";
import axios from "axios";

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

  it("Username changes state when input value changes", () => {
    const usernameInput = screen.getByLabelText("username input");
    fireEvent.change(usernameInput, { target: { value: "Panda" } });
    expect(usernameInput.value).toEqual("Panda");
  });

  it("Password changes state when the input value changes", () => {
    const passwordInput = screen.getByLabelText("password input");
    fireEvent.change(passwordInput, { target: { value: "areCool" } });
    expect(passwordInput.value).toEqual("areCool");
  });

  it("is gatherDetails called after submit is clicked", () => {
    vi.spyOn(axios, "post");

    const submitButton = screen.getByLabelText("submit button");
    submitButton.click();

    expect(axios.post).toHaveBeenCalled();
  });

  it("is api called with button click?", () => {
    const axiosspy = vi.spyOn(axios, "post");

    const submitButton = screen.getByLabelText("submit button");
    submitButton.click();

    expect(axiosspy).toHaveBeenCalledWith(
      "https://linguaplaya-be.onrender.com/login",
      expect.any(Object)
    );
  });
});
