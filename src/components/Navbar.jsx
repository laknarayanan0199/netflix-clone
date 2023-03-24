import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflix from "../assests/netflix.png";
import hamburger from "../assests/hamburger.png";
import close from "../assests/close.png";
import "./navbar.css";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuth");

  const [show, handleShow] = useState(false);

  const [isHamburger, setIsHamburger] = useState(false);

  const navigate = useNavigate();

  const trasitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
      return;
    }
    handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", trasitionNavBar);
    return () => {
      window.removeEventListener("scroll", trasitionNavBar);
    };
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const homePageHandler = () => {
    if (isAuthenticated) {
      navigate("/home");
    }
  };

  return (
    <div className={`navbar  ${show && "nav__black"}`}>
      <div className="nav__contents__left">
        {!isHamburger ? (
          <img
            src={hamburger}
            alt=""
            className="hamburger_icon"
            onClick={() => setIsHamburger(!isHamburger)}
          />
        ) : (
          <img
            src={close}
            alt=""
            className="hamburger_icon"
            onClick={() => setIsHamburger(!isHamburger)}
          />
        )}
        {isHamburger ? (
          <div className="mobile__nav__links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/series"}>Series</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/my-list"}>My List</Link>
          </div>
        ) : null}
        <img
          src={netflix}
          alt="logo"
          className="logo"
          onClick={homePageHandler}
        />
        {!isHamburger ? (
          <div className="nav__links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/series"}>Series</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/my-list"}>My List</Link>
          </div>
        ) : null}
      </div>
      <div className="right">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
