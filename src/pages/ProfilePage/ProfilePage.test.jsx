import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import ProfilePage from '../ProfilePage';

describe('ProfilePage', () => {
    it('renders without errors', () => {
      // Wrap the component with MemoryRouter
      const { container } = render(
        <MemoryRouter>
          <ProfilePage />
        </MemoryRouter>
      );
      expect(container).toBeTruthy();
    });
  });
