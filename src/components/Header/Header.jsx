import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/order">Orders</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign UP</NavLink>
      </div>
    </nav>
  );
};

export default Header;
