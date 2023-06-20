import React, { useEffect } from "react";
import { Login } from "../../components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css'
const LoginPage = () => {
  return (
    <div className="input-container">
      <Login />
    </div>
  );
  
};
export default LoginPage;
