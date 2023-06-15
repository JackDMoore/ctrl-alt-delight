import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const styles = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
});

const PageWrapper = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" id="link" style={styles}>
            Home
          </NavLink>
          <NavLink to="login" id="link" style={styles}>
            Login
          </NavLink>
          <NavLink to="register" id="link" style={styles}>
            Register
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default PageWrapper;
