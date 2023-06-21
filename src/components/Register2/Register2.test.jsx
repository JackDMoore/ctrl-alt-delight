import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter ,  BrowserRouter as Router } from "react-router-dom";
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

  it("Games input changes state when input value changes", () => {
    const usernameInput = screen.getByLabelText("games input");
    fireEvent.change(usernameInput, { target: { value: "Panda" } });
    expect(usernameInput.value).toEqual("Panda");
  });

  it("Console Value = Playstation", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
  
    const consoleDropdowns = screen.getAllByLabelText("console you play");
    const consoleDropdown = consoleDropdowns[0];
    fireEvent.change(consoleDropdown, { target: { value: "PlayStation" } });
    expect(consoleDropdown.value).toEqual("PlayStation");
  });
  it("Console Value = Xbox", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
  
    const consoleDropdowns = screen.getAllByLabelText("console you play");
    const consoleDropdown = consoleDropdowns[0];
    fireEvent.change(consoleDropdown, { target: { value: "Xbox" } });
    expect(consoleDropdown.value).toEqual("Xbox");
  });

  it("Console Value = PC", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
  
    const consoleDropdowns = screen.getAllByLabelText("console you play");
    const consoleDropdown = consoleDropdowns[0];
    fireEvent.change(consoleDropdown, { target: { value: "PC" } });
    expect(consoleDropdown.value).toEqual("PC");
  });


  it("Language value = German", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
    const consoleDropdowns = screen.getAllByLabelText("language you speak");
    const consoleDropdown = consoleDropdowns[0];
    fireEvent.change(consoleDropdown, { target: { value: "German" } });
    expect(consoleDropdown.value).toEqual("German");
  });

  it("Language value = Dutch", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
    const consoleDropdowns = screen.getAllByLabelText("language you want to learn");
    const consoleDropdown = consoleDropdowns[0]; 
    fireEvent.change(consoleDropdown, { target: { value: "Dutch" } });
    expect(consoleDropdown.value).toEqual("Dutch");
  });

  it("Language value = French", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
    const consoleDropdowns = screen.getAllByLabelText("language you want to learn");
    const consoleDropdown = consoleDropdowns[0]; 
    fireEvent.change(consoleDropdown, { target: { value: "French" } });
    expect(consoleDropdown.value).toEqual("French");
  });

  it("Language value = Italian", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
    const consoleDropdowns = screen.getAllByLabelText("language you want to learn");
    const consoleDropdown = consoleDropdowns[0]; 
    fireEvent.change(consoleDropdown, { target: { value: "Italian" } });
    expect(consoleDropdown.value).toEqual("Italian");
  });

  it("Language value = English", () => {
    render(
      <Router>
        <Register2 />
      </Router>
    );
    const consoleDropdowns = screen.getAllByLabelText("language you want to learn");
    const consoleDropdown = consoleDropdowns[0]; 
    fireEvent.change(consoleDropdown, { target: { value: "English" } });
    expect(consoleDropdown.value).toEqual("English");
  });
});
