// Navbar/index.jsx
import React from "react";
import { Link, NavLink, Outlet} from "react-router-dom";

const Navbar = () => {

  const user = localStorage.getItem('username')
  // const navigate = useNavigate();
  const logoutbtn = () => {
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    // navigate('/')
  }
  return (<>
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        Logo
      </NavLink>
      <div className="navbar-links">
       
        {!user &&
          (
            <div>
              <NavLink to="/login"> LogIn </NavLink>
              <NavLink to="/register"> Register </NavLink>
            </div>
          )
        }
        {user &&
          (
            <div>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to='/chat'>Chat</NavLink>
              <NavLink onClick={logoutbtn} to="/" >Logout</NavLink>
              <NavLink to="/profile">Connections</NavLink>
            </div>
          )
        }
        
      </div>
    </nav>
        </>
  );
};

export default Navbar;
