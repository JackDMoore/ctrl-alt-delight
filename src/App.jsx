import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./globalStyles";
import Header from "./components/Header/index";
import "./styles.css";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <ToastContainer />
      <Container className="my-2">
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;

// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme, GlobalStyles } from "./globalStyles";
// import Header from "./components/Header/index";
// import Chatbot from "./components/Chatbot/index";
// import FormContainer from "./components/FormContainer/index";
// import Hero from "./components/Hero/index";
// import Loader from "./components/Loader/index";
// import NotFound from "./pages/NotFound/index";
// import Profile from "./pages/Profile/index";
// import Home from "./pages/Home/index";
// import Login from "./pages/Login/index";
// import Register from "./pages/Register/index";
// import "./styles.css";

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
//       <Container className="my-2">
//         <Outlet />
//       </Container>
//       <Chatbot />
//       <FormContainer />
//       <Hero />
//       <Loader />
//       <NotFound />
//       <Profile />
//       <Home />
//       <Login />
//       <Register />
//     </ThemeProvider>
//   );
// };

// export default App;
