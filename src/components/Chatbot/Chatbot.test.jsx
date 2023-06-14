import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

import Chatbot from ".";

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

 it("sends a message and receives a response", async () => {
  const messageInput = screen.getByPlaceholderText("Type your message here...");
  const sendButton = screen.getByRole('button', { name: /Send/i });

  userEvent.type(messageInput, "Hello, how are you?"); // Type a message
  userEvent.click(sendButton); // Click send button

  // Wait for the response to be rendered in the chat
  await screen.findByText("Response from ChatGPT");

  // Add assertions to verify that the response is displayed in the chat
});

it("displays a typing indicator while waiting for a response", async () => {
  const messageInput = screen.getByPlaceholderText("Type your message here...");
  const sendButton = screen.getByRole('button', { name: /Send/i });

  userEvent.type(messageInput, "Hello, how are you?"); // Type a message
  userEvent.click(sendButton); // Click send button

  // Check if the typing indicator is displayed
  const typingIndicator = screen.getByText("LinguaBot is typing");
  expect(typingIndicator).toBeInTheDocument();

  // Wait for the response to be rendered in the chat
  await screen.findByText("Response from ChatGPT");

  // Check if the typing indicator is no longer displayed
  expect(typingIndicator).not.toBeInTheDocument();
});

// Add more tests to cover different scenarios, such as empty messages, error handling, etc.
});
