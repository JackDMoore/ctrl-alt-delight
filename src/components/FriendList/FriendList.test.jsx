import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import FriendList from '../FriendList';

describe('FriendList component', () => {
  beforeEach(() => {
    render(<FriendList />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders Friend list heading', () => {
    const headingElement = screen.getByText(/Friend list/i);
    expect(headingElement).toBeTruthy();
  });
});
