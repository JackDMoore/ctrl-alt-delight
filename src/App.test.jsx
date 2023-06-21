// import React from "react";
// import { describe, it, expect, beforeEach, afterEach } from "vitest";
// import { screen, render, cleanup} from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);

// import { HomePage, RegisterPage } from "./pages";

// describe("Register Component", () => {
//   beforeEach(() => {
//     render(
//       <MemoryRouter>
//         <HomePage />
//       </MemoryRouter>
//     );
//   });

//   afterEach(() => {
//     cleanup();
//   });

//   it('should render the home page with a welcome message', () => {
//     render(
//       <MemoryRouter>
//         <HomePage />
//       </MemoryRouter>
//     );

//   //   const welcomeMessage = screen.getByText('Welcome');
//   //   expect(welcomeMessage).toBeInTheDocument();
//   // });
//   it('render the Login page', ()=>{
//     const LoginPage = screen.getByText(/Login/i);
//     expect(LoginPage).toBeInTheDocument();
//   })
//   it('render the Register page', ()=>{
//     const RegisterPage = screen.getByText(/Register/i);
//     expect(RegisterPage).toBeInTheDocument();
//   })
// });
