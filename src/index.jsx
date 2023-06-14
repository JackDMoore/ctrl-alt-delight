// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./globalStyles";
// import Header from "./components/Header";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);

// const App = () => {
//   const [currentTheme, setCurrentTheme] = useState("light");

//   const toggleTheme = () => {
//     setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
//       <GlobalStyles />
//       <Header toggleTheme={toggleTheme} />
//       <ToastContainer />
//       <App />
//       <Container className="my-2">
//         <Outlet />
//       </Container>

//     </ThemeProvider>
//   );
// };
