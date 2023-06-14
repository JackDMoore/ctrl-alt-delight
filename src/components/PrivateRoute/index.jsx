import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, component: Component, exact }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <Route path={path} exact={exact} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import Home from "./Home";
// import Profile from "./Profile";
// import Login from "./Login";
// import NotFound from "./NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Route path="/" exact element={<Home />} />
//       <PrivateRoute path="/profile" component={Profile} />
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<NotFound />} />
//     </Router>
//   );
// };

// export default App;
