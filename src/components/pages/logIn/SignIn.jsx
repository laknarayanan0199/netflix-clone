import React, { useState } from "react";
import netflix from "../../../assests/netflix.png";
import "./signIn.css";
import "../register/navbar.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState();

  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      localStorage.setItem(email, `${password}`);
      props.loginHandler(email, password);
      setAlert(false);
      navigate("/home");
    }
    return setAlert(true);
  };

  return (
    <div className="signin">
      <div className="navbar">
        <img className="logo" src={netflix} alt="" />
      </div>
      <div className="signInScreen">
        <form>
          <h1>Sign In</h1>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {alert && <p>Enter a valid Email Address</p>}
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {alert && (
            <p className="alert">
              Password should not be less than 7 charcters
            </p>
          )}
          <button onClick={signIn} type="submit">
            Sign In
          </button>
          <p>
            <button className="forgot-password">Forgot your Password ?</button>
          </p>
          <h5>
            <span className="signInScreen__gray">New to Netflix? </span>
            <span onClick={() => navigate("/")} className="signInScreen__link">
              Sign up now
            </span>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
