import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { PageWrapper } from "./components";
// import {UserProvider} from './context/UserContext'

//import { useAuthContext } from './hooks/useAuthContext'

const App = () => {

  // const {user} = useAuthContext()
  return (
    // <UserProvider>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/register" element={<Pages.RegisterPage />} />
          <Route path="/register2" element={<Pages.RegisterPage2 />} />
          <Route path="/login" element={<Pages.LoginPage />} />
          <Route path="/profile" element={<Pages.ProfilePage />} />
          <Route path="/connections" element={<Pages.ConnectionsPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Route>
      </Routes>
    // </UserProvider>
  );
};

export default App;
