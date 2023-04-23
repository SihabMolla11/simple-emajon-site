import React, { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const SignUP = () => {
  const [error, setError] = useState("");

  const {createUser} = useContext(AuthContext)

  const handelSignup = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError('')

    if (password !== confirm) {
      setError("your password did not match");
      return
    }
    else if(password.length < 6){
      setError('password want take minimum 6 character')
      return
    }

    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })

  };

  return (
    <div className="login-container">
      <h2 className="login-title">Please Sign UP</h2>
      <form onSubmit={handelSignup}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
          <small style={{ color: "red" }}>{error}</small>
        </div>
        <input className="submit-btn" type="submit" value="Sign Up" />
      </form>
      <div>
        <div className="create-section">
          <small>
            <span style={{ color: "#2A414F" }}>Already have an account? </span>
            <Link
              style={{ textDecoration: "none", color: "#FF9900" }}
              to="/login"
            >
              Login
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

export default SignUP;
