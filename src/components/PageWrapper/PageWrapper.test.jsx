import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import PageWrapper from '../PageWrapper';

describe("PageWrapper", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PageWrapper />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders login/sign up", () => {
    const login = screen.getByRole('link', {
      name: /Login/i
    });
    expect(login).toBeTruthy();
  });

  it("renders Home link", () => {
    const homeLink = screen.getByRole('link', { name: /Logo/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("renders ChatIcon", () => {
    const chatIcon = screen.getByRole('presentation', { name: /Chat Icon/i });
    expect(chatIcon).toBeInTheDocument();
  });

  it("contains an element with the class 'profile-card'", () => {
    const profileCard = screen.getByTestId("profile-card");
    expect(profileCard).toHaveClass("profile-card");
  });

  it("calls handleMessageClick on MessageButton click", () => {
    const mockNavigate = jest.fn();

    // Manual mock for react-router-dom
    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate
    }));

    render(
      <MemoryRouter>
        <PageWrapper />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Message"));
    expect(mockNavigate).toHaveBeenCalledWith('/chat');
  });
});
