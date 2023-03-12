import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/userSlice";
import { useNavigate } from "react-router";

import "./signup.css";

const Signup = (props) => {
  const { email } = props;

  const [password, setPassword] = useState("");

  const [passwordIsValid, setPasswordIsValid] = useState();

  const users = useSelector((state) => state.user.users);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (event) => {
    console.log(users);
    event.preventDefault();
    if (password.length > 7) {
      setPasswordIsValid("");
      localStorage.setItem("isAuth", true);
      dispatch(
        userActions.addUser({
          id: Math.random(),
          email: `${email}`,
          password: `${password}`,
        })
      );
      navigate("/home");
      alert(`New User Account Created`);
    } else
      setPasswordIsValid(
        <span>Password should be more than 7 characters</span>
      );
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input
            placeholder="Enter your email address"
            value={email}
            readOnly={email}
          ></input>
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
