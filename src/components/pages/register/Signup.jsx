import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { useNavigate } from "react-router";

import netflix from "../../../assests/netflix.png";
import "./signup.css";
import "./navbar.css";

const Signup = (props) => {
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
      dispatch(
        userActions.addUser({
          email: email,
          password: password,
        })
      );
    } else
      setPasswordIsValid(
        <span>Password should be more than 7 characters</span>
      );
  };

  const { email } = props;
  return (
    <>
      <div className="navbar border">
        <img className="logo" src={netflix} alt="" />
        <button className="SignupButton">Sign In</button>
      </div>
      <div className="signup">
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <p>{email}</p>
          <input
            placeholder="Enter your Password"
            type="password"
            //   value={passwordIsValid}
            onChange={passwordHandler}
          />
          {passwordIsValid}

          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
