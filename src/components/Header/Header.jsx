import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="menu-bar">
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/order">Orders</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign UP</NavLink>
        {user && (
          <div>
            <span>Welcome {user.email} </span>
            <button className="btn-out" onClick={handelLogOut}>Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
