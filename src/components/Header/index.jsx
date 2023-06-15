import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../globalStyles";
import "../../styles.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
      // Handle the error, e.g., display an error message
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <nav>
        {" "}
        {/* Change header element to nav */}
        <Navbar
          bg={theme === "light" ? "light" : "dark"}
          variant={theme === "light" ? "light" : "dark"}
          expand="lg"
          collapseOnSelect
        >
          <Container fluid="xl">
            <LinkContainer to="/">
              <Navbar.Brand
                className={theme === "light" ? "logo" : "logo react"}
              >
                LOGO
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={toggleTheme}>
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                {userInfo ? (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <FaSignInAlt /> Sign In
                      </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link>
                        <FaSignOutAlt /> Sign Up
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </ThemeProvider>
  );
};

export default Header;
