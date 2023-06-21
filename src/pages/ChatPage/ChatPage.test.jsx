import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import ChatPage from '../ChatPage';

describe('ChatPage', () => {
  it('renders without errors', () => {
    const socket = {
      on: () => {},
    };

    const div = document.createElement('div');
    render(
      <MemoryRouter>
        <ChatPage socket={socket} />
      </MemoryRouter>,
      div
    );
    expect(div.querySelector('.chat')).not.toBeNull();
  });
});
