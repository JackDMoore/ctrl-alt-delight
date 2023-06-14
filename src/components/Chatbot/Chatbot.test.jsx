import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import Chatbot from "./Chatbot";

describe("Chatbot component", () => {
  beforeEach(() => {
    render(<Chatbot />);
  });

  afterEach(() => {
    cleanup();
  });

  it("displays intial system message", () => {
    const systemMessage = screen.getByText(
      "Hello, I am LinguaBot. I am here to help you translate your messages while you game. Type your language and let's get started!"
      );
    expect(systemMessage).toBeInTheDocument();
  });

  it("displays a message input field", () => {
    const messageInput = screen.getByPlaceholderText("Type your message here...");
    expect(messageInput).toBeInTheDocument();
  });

  it ("displays a send button", () => {
    const sendButton = screen.getByRole('button', { name: /Send/i });
    expect(sendButton).toBeInTheDocument();
 });
