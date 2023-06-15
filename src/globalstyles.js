import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor: "#F4EFFF", // Light purple background
  textColor: "#000000",
  // ...
};

export const darkTheme = {
  backgroundColor: "#4E3A6F", // Dark purple background
  backgroundGradient: "linear-gradient(135deg, #4E3A6F, #6B4D90)", // Dark purple background with gradient
  textColor: "#ffffff",
  // ...
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    background-image: ${({ theme }) => theme.backgroundGradient};
    color: ${({ theme }) => theme.textColor};
    // Add other global styles here
  }
`;
