import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"; // Import matchers

import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the Header component", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders the Home page by default", () => {
    const homePage = screen.getByText(/welcome to hogwarts/i);
    expect(homePage).toBeInTheDocument();
  });

  it("navigates to the Letter page when the Letter link is clicked", async () => {
    const letterLink = screen.getByRole("link", { name: /letter/i });
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    await userEvent.click(letterLink);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("navigates to the Sorting Hat page when the Sorting Hat link is clicked", async () => {
    const sortingHatLink = screen.getByRole("link", { name: /sorting hat/i });
    expect(
      screen.queryByRole("button", { name: /sort me/i })
    ).not.toBeInTheDocument();
    await userEvent.click(sortingHatLink);
    expect(
      screen.getByRole("button", { name: /sort me/i })
    ).toBeInTheDocument();
  });
});
