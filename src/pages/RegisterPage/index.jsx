import React from "react";
import { Register } from "../../components";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="input-container">
      <Register />
    </div>
  );
};

export default RegisterPage;
