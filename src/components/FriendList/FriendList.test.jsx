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

  it('renders Connections heading', () => {
    const headingElement = screen.getByText(/Connections/i);
    expect(headingElement).toBeTruthy();
  });
});
