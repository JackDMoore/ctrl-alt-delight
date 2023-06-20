import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import ChatFooter from '.';

describe('ChatFooter component', () => {
  let mockSocket;

  beforeEach(() => {
    mockSocket = {
      emit: vi.fn(),
    };

    render(<ChatFooter socket={mockSocket} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('updates message state on input change', () => {
    const messageInput = screen.getByPlaceholderText('Write message');
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

    expect(messageInput.value).toBe('Hello, world!');
  });

  it('does not call socket.emit when send button is clicked and message is empty', () => {
    const sendButton = screen.getByText('SEND');
    fireEvent.click(sendButton);

    expect(mockSocket.emit).not.toHaveBeenCalled();
  });

});


