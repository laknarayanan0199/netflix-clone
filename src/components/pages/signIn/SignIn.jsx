import React, { useState } from "react";
import netflix from "../../../assests/netflix.png";
import "./signIn.css";
import "../register/navbar.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  console.log(user);

  const signIn = () => {
    dispatch(
      userActions.addUser({
        email: email,
        password: password,
      })
    );
  };

  const register = () => {
    navigate("/");
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
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type="submit">
            Sign In
          </button>
          <p>
            <button className="forgot-password">Forgot your Password ?</button>
          </p>
          <h5>
            <span className="signInScreen__gray">New to Netflix? </span>
            <span onClick={register} className="signInScreen__link">
              Sign up now
            </span>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
