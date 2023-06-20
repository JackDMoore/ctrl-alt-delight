import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import ConnectionButton from ".";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("ConnectionButton component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ConnectionButton />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the button with the correct text", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1); // Ensure there is only one button
    const button = buttons[0];
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Connect");
  });

  it("calls the onClick function when the button is clicked", () => {
    let isClicked = false;
    const onClickHandler = () => {
      isClicked = true;
    };
  
    render(<ConnectionButton onClick={onClickHandler} />);
    const buttons = screen.queryAllByRole("button", { name: "Connect" });
  
    buttons.forEach((button) => {
      fireEvent.click(button);
    });
  
    expect(isClicked).toBe(true);
  });
});
