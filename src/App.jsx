import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import HomePage from "./pages/HomePage";
import * as Pages from "./pages";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(undefined);
  const username = localStorage.getItem("username");
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route path="/register2" element={<Pages.RegisterPage2 />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/profile" element={<Pages.ProfilePage />} />
          <Route path="/connections" element={<Pages.ConnectionsPage />} />
          <Route path="/chat" element={<Pages.ChatPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
