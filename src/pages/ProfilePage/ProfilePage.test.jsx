import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ProfilePage from '../ProfilePage/index';
import { MemoryRouter } from 'react-router-dom';

describe('ProfilePage', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
  });

  it('displays the user information', () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProfilePage />
      </MemoryRouter>
    );
    
    // Replace the following assertions with your expected text/content
    expect(getByText('Your Profile Information')).toBeInTheDocument();
    expect(getByText('Your Languages: English')).toBeInTheDocument();
    expect(getByText('Learning: Spanish')).toBeInTheDocument();
  });
  
});
