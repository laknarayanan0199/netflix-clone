import { useState } from "react";

import Signup from "./Signup";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(false);

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
    <>
      {!emailIsValid ? (
        <div className="register">
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
                onChange={emailHandler}
              />
              <button className="registerButton" onClick={registerHandler}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Signup email={email} />
      )}
    </>
  );
};

export default Register;
