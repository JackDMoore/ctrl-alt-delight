import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FriendCard from '../FriendCard';

describe('FriendCard component', () => {
  it('renders the username correctly', () => {
    const username = 'JohnDoe';
    const message = 'Message'
    render(
      <MemoryRouter>
        <FriendCard username={username} message={message} />
      </MemoryRouter>
    );

    const usernameElement = document.querySelector('.profile-card h3');
    expect(usernameElement.textContent).toBe(`${username}${message}`);
  });
});
