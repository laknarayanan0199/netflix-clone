import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { useNavigate } from "react-router";

import netflix from "../../../assests/netflix.png";
import "./signup.css";
import "./navbar.css";

const Signup = (props) => {
  const { email } = props;

  const [password, setPassword] = useState("");

  const [passwordIsValid, setPasswordIsValid] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (password.length > 7) {
      setPasswordIsValid(true);
      navigate("/home");
      dispatch(userActions.addUser({ email, password }));
      prompt(`New User Account Created`);
    } else
      setPasswordIsValid(
        <span>Password should be more than 7 characters</span>
      );
  };

  return (
    <>
      <div className="navbar border">
        <img className="logo" src={netflix} alt="logo" />
        <button className="signInButton">Sign In</button>
      </div>
      <div className="signup">
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input placeholder="Enter your email address"
          value={email}></input>
          <input
            placeholder="Enter your Password"
            type="password"
            //   value={passwordIsValid}
            onChange={passwordHandler}
          />
          {passwordIsValid}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
