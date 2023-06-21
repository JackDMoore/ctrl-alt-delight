import React from "react";
import { Routes, Route} from "react-router-dom";
import * as Pages from "./pages";
import { PageWrapper } from "./components";
import socketIO from "socket.io-client";
import './App.css'

const socket = socketIO.connect('https://chat-socket-api-lk2p.onrender.com/')

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route path="/register2" element={<Pages.RegisterPage2 />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/profile" element={<Pages.ProfilePage />} />
          <Route path="/connections" element={<Pages.ConnectionsPage />} />
          <Route path="/chat" element={<Pages.ChatPage socket={socket} />} />
          <Route path="/chatlearningplan" element={<Pages.ChatLearningPlanPage/>} />
          <Route path="/chatquiz" element={<Pages.ChatQuizPage/>} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};


export default App;
