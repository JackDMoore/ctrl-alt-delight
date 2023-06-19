import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import axios from "axios";

import Register2 from ".";

describe("Register2 Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Register2 />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Displays a heading with text: Complete Registration", () => {
    const heading = screen.getByText("Complete Registration");
    expect(heading).toBeInTheDocument();
  });

  it("Displays text: Login here", () => {
    const text = screen.getByText("Login here");
    expect(text).toBeInTheDocument();
  });

  it("Games input changes state when input value changes", () => {
    const usernameInput = screen.getByLabelText("games input");
    fireEvent.change(usernameInput, { target: { value: "Panda" } });
    expect(usernameInput.value).toEqual("Panda");
  });

  it("Console input changes state when input value changes", () => {
    const nameInput = screen.getByLabelText("console input");
    fireEvent.change(nameInput, { target: { value: "Panda" } });
    expect(nameInput.value).toEqual("Panda");
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
      `https://linguaplaya-be.onrender.com/users/games/${username}`,
      expect.any(Object)
    );
  });
});