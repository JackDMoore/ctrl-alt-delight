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

  // it("Displays text: Already registered?", () => {
  //   const text = screen.getByText("Already registered?");
  //   expect(text).toBeInTheDocument();
  // });

  // it("Displays text: Login here", () => {
  //   const text = screen.getByText("Login here");
  //   expect(text).toBeInTheDocument();
  // });

  it("Username changes state when input value changes", () => {
    const usernameInput = screen.getByLabelText("username input");
    fireEvent.change(usernameInput, { target: { value: "Panda" } });
    expect(usernameInput.value).toEqual("Panda");
  });

  it("Name changes state when input value changes", () => {
    const nameInput = screen.getByLabelText("name input");
    fireEvent.change(nameInput, { target: { value: "Panda" } });
    expect(nameInput.value).toEqual("Panda");
  });

  it("Email changes state when input value changes", () => {
    const emailInput = screen.getByLabelText("email input");
    fireEvent.change(emailInput, { target: { value: "Panda" } });
    expect(emailInput.value).toEqual("Panda");
  });

  it("Password changes state when the input value changes", () => {
    const passwordInput = screen.getByLabelText("password input");
    fireEvent.change(passwordInput, { target: { value: "areCool" } });
    expect(passwordInput.value).toEqual("areCool");
  });

  // it("is gatherDetails called after submit is clicked", () => {
  //   vi.spyOn(axios, "post");
  //   const submitButton = screen.getByLabelText("submit button");
  //   submitButton.click();
  //   expect(axios.post).toHaveBeenCalled();
  // });

  // it("is api called with button click?", () => {
  //   const axiosspy = vi.spyOn(axios, "post");
  //   const submitButton = screen.getByLabelText("submit button");
  //   submitButton.click();
  //   expect(axiosspy).toHaveBeenCalledWith(
  //     "https://linguaplaya-be.onrender.com/signup",
  //     expect.any(Object)
  //   );
  // });
});
