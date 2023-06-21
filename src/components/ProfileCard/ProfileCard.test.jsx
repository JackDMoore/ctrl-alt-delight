import React from "react";
import { describe, it, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect"; // Update the import statement
import ProfileCard from "../ProfileCard/index";

expect.extend({ toBeInTheDocument });

describe("ProfileCard", () => {
  const profile = {
    username: "JohnDoe",
    profile_bio: "Hey",
    platform: "Xbox",
    game_name: "Fortnite",
    language_known: "English",
    language_learn: "Spanish",
  };

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ProfileCard
          {...profile}
          onConnect={() => {}}
          onMessage={() => {}}
        />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the profile card correctly", () => {
    expect(screen.getByText(profile.username)).toBeInTheDocument();
    expect(screen.getByText(profile.profile_bio)).toBeInTheDocument();
    expect(screen.getByText(profile.platform)).toBeInTheDocument();
    expect(screen.getByText(profile.game_name)).toBeInTheDocument();
    expect(screen.getByText(profile.language_known)).toBeInTheDocument();
    expect(screen.getByText(profile.language_learn)).toBeInTheDocument();
  });

  it("calls the onConnect prop when connection button is clicked", () => {
    const handleConnectClick = jest.fn();
    render(
      <MemoryRouter>
        <ProfileCard
          {...profile}
          onConnect={handleConnectClick}
          onMessage={() => {}}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("connect-button"));
    expect(handleConnectClick).toHaveBeenCalledTimes(1);
  });

  it("calls the onMessage prop when message button is clicked", () => {
    const handleMessageClick = jest.fn();
    render(
      <MemoryRouter>
        <ProfileCard
          {...profile}
          onConnect={() => {}}
          onMessage={handleMessageClick}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByTestId("message-button"));
    expect(handleMessageClick).toHaveBeenCalledTimes(1);
  });
});
