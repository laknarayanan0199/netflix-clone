import { useState } from "react";
import netflix from "../../../assests/netflix.png";

import Signup from "./Signup";
import "./register.css";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(false);

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const registerHandler = (event) => {
    event.preventDefault();
    if (email.includes("@")) {
      setEmailIsValid(true);
    }
  };

  return (
    <div className="register">
      <div className="nav__contents">
        <img src={netflix} alt="logo" className="nav__logo" />
        <button className="signInButton" onClick={() => navigate("/login")}>
          Sign In
        </button>
      </div>
      {!emailIsValid ? (
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <input
              type="email"
              placeholder="Email address"
              className="email"
              onChange={emailHandler}
            />
            <button className="registerButton" onClick={registerHandler}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <Signup email={email} />
      )}
    </div>
  );
};

export default Register;
