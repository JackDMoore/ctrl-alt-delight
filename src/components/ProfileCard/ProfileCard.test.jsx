import React from 'react';
import { describe, it, expect } from 'vitest';
<<<<<<< HEAD
import { render } from '@testing-library/react';
=======
import { render, fireEvent, getByLabelText } from '@testing-library/react';
>>>>>>> origin/staging
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
<<<<<<< HEAD
=======
  
>>>>>>> origin/staging
});
