import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { PageWrapper } from "./components";
import './App.css'

const App = () => {
  const user = localStorage.getItem('username');
    return (
      <>
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="/register" element={<Pages.RegisterPage />} />
            <Route path="/login" element={<Pages.LoginPage />} />
            <Route path="/profile" element={<Pages.ProfilePage />} />
            <Route path="*" element={<Pages.NotFoundPage />} />
            <Route path="/chat" element={<Pages.ChatPage user={user} />} />
          </Route>
        </Routes>
      </>
    );
  };


export default App;
