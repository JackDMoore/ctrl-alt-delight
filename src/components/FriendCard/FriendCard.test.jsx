import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FriendCard from '../FriendCard';

describe('FriendCard component', () => {
  it('renders the username correctly', () => {
    const username = 'JohnDoe';
    render(
      <MemoryRouter>
        <FriendCard username={username} />
      </MemoryRouter>
    );

    const usernameElement = document.querySelector('.profile-card h3');
    expect(usernameElement.textContent).toBe(username);
  });
});
