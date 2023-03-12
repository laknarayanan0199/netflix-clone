import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState(false);

  const users = useSelector((state) => state.user.users);

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    if (
      users.some((user) => email === user.email && password === user.password)
    ) {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    }
    return setAlert(true);
  };

  return (
    <div className="signin">
      <div className="signInScreen">
        <h1>Sign In</h1>
        <form>
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

export default Login;
