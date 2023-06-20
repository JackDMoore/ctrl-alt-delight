import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import MessageButton from ".";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("MessageButton component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MessageButton />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the button with the correct text", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(1);
    const button = buttons[0];
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Message");
  });

  it("calls the onClick function when the button is clicked", () => {
    let isClicked = false;
    const onClickHandler = () => {
      isClicked = true;
    };

    render(<MessageButton onClick={onClickHandler} />);
    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(isClicked).toBe(true);
  });
});
