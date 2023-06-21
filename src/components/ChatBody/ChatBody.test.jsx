import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import ChatBody from ".";

describe("ChatBody component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ChatBody
          messages={[
            { id: 1, name: "Alice", text: "Hello" },
            { id: 2, name: "Bob", text: "Hi" },
          ]}
          typingStatus="Typing..."
          lastMessageRef={null}
        />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the component header with 'Direct Message' text", () => {
    const headerText = screen.getByText("Direct Message");
    expect(headerText).toBeInTheDocument();
  });

  it("renders the 'LEAVE CHAT' button", () => {
    const leaveChatButton = screen.getByRole("button", { name: "LEAVE CHAT" });
    expect(leaveChatButton).toBeInTheDocument();
  });

  it('renders messages correctly', () => {
    const senderName = screen.getByText('Alice');
    expect(senderName).toBeInTheDocument();

    const messageText = screen.getByText('Hello');
    expect(messageText).toBeInTheDocument();

    const recipientName = screen.getByText('Bob');
    expect(recipientName).toBeInTheDocument();

    const typingStatusText = screen.getByText('Typing...');
    expect(typingStatusText).toBeInTheDocument();
  });

});
