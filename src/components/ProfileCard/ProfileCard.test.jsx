import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProfileCard from '../ProfileCard';

describe('ProfileCard compartment', () => {
  it('renders ProfileCard with username', () => {
    const username = 'JohnDoe';
    const { queryByText } = render(
      <MemoryRouter>
        <ProfileCard username={username} />
      </MemoryRouter>
    );

    const usernameElement = queryByText(username);
    expect(usernameElement).toBeTruthy();
  });
});
