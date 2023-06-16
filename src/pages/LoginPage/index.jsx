import React from "react";
import { Login } from "../../components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="input-container">
      <Login />
    </div>
  );
};

export default LoginPage;
