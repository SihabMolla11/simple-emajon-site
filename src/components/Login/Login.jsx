import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Please Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="submit-btn" type="submit" value="Login" />
      </form>
      <div>
        <div className="create-section">
          <small>
            <span style={{ color: "#2A414F" }}>New to Ema-john? </span>
            <Link
              style={{ textDecoration: "none", color: "#FF9900" }}
              to="/signup"
            >
              Create New Account
            </Link>
          </small>
          <div className="or-section">
            <hr className="horijantal-line" /> or
            <hr className="horijantal-line" />
          </div>
          <button>
            <img className="google-signup" src="google.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
