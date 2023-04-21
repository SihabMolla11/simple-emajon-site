import React from "react";
import "./signup.css";

const SignUP = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Please Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" id="" required/>
        </div>
        <input className="submit-btn" type="submit" value="Login" />
      </form>
      <div>
        <div className="create-section">
          <small>
            <span style={{ color: "#2A414F" }}>New to Ema-john?</span>{" "}
            <span style={{ color: "#FF9900" }}>Create New Account</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
