import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Chatbot from ".";

describe("Chatbot component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Chatbot />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the chat icon when chat is not visible", () => {
    const chatIcon = screen.getByAltText("Chat Icon");
    expect(chatIcon).toBeInTheDocument();
  });

  it("opens the chat on chat icon click", () => {
    const chatIcon = screen.getByAltText("Chat Icon");
    fireEvent.click(chatIcon);
    const messageInput = screen.getByPlaceholderText("Type message here");
    expect(messageInput).toBeInTheDocument();
  });

  it("closes the chat on close button click", () => {
    const chatIcon = screen.getByAltText("Chat Icon");
    fireEvent.click(chatIcon);
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);
    const chatIconAfterClose = screen.getByAltText("Chat Icon");
    expect(chatIconAfterClose).toBeInTheDocument();
  });

  // Add more tests to cover other functionality and edge cases of the Chatbot component
});
