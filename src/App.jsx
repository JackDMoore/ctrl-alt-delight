import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/register" element={<Pages.Register />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/profile" element={<Pages.Profile />} />
      </Routes>
    </div>
  );
};

export default App;
