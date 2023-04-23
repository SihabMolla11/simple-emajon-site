import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const [show, setShow] = useState(true)
  const { loginUser } = useContext(AuthContext);
  const nevigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState(null);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        nevigate(from, {replace: true} );
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Please Login</h2>
      <form onSubmit={handelLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "password" : "text"} name="password" required />
          <p onClick={()=>setShow(!show)}><small>
            {
              show ? "show password" : "hite password"
            }
            </small></p>
          <small style={{ color: "red" }}>{error}</small>
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
