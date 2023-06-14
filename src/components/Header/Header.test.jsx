import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "./Header";

const mockStore = configureStore([]);
const initialState = {
  auth: {
    userInfo: null,
  },
};
const store = mockStore(initialState);

describe("Header component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });

  test("renders logo", () => {
    const logoElement = screen.getByText("LOGO");
    expect(logoElement).toBeInTheDocument();
  });

  test("toggles theme on button click", () => {
    const themeButton = screen.getByText("Dark Mode");
    fireEvent.click(themeButton);
    expect(screen.getByText("Light Mode")).toBeInTheDocument();
    fireEvent.click(themeButton);
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });

  test("renders sign in and sign up links when user is not logged in", () => {
    const signInLink = screen.getByText("Sign In");
    const signUpLink = screen.getByText("Sign Up");
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  test("renders user dropdown menu when user is logged in", () => {
    const userDropdown = screen.getByRole("button", { name: "username" });
    localStorage.setItem("userInfo", JSON.stringify({}));
    fireEvent.click(userDropdown);
    const profileLink = screen.getByText("Profile");
    const logoutLink = screen.getByText("Logout");
    expect(profileLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
