import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflix from "../assests/netflix.png";
import "./navbar.css";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuth");

  const [show, handleShow] = useState(false);

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

  const profileHandler = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const signInHandler = () => {
    navigate("/login");
  };

  return (
    <div className={`navbar  ${show && "nav__black"}`}>
      <div className="nav__contents__left">
        <img src={netflix} alt="logo" className="logo nav__logo" />
        {isAuthenticated && (
          <div className="nav__links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/series"}>Series</Link>
            <Link to={"/movies"}>Movies</Link>
            <Link to={"/my-list"}>My List</Link>
          </div>
         )}
      </div>
      <div className="right">
        {!isAuthenticated && (
          <button className="signInButton" onClick={signInHandler}>
            Sign In
          </button>
         )} 
                {isAuthenticated && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            onClick={profileHandler}
          />
         )}
      </div>
    </div>
  );
};

export default Navbar;

// <div className={`navbar ${show && "nav__black"}`}>
//   <div className="nav__contents">
//   <img
//     onClick={() => {
//       navigate("/home");
//     }}
//     className="logo nav__logo"
//     src={netflix}
//     alt="logo"
//   />
//   {isAuthenticated && (
//     <div className="nav__links">
//       <Link to={"/home"}>Home</Link>
//       <Link to={"/series"}>Series</Link>
//       <Link to={"/movies"}>Movies</Link>
//       <Link to={"/my-list"}>My List</Link>
//     </div>
//   )}
//   </div>
//   <div>
//     {!isAuthenticated && (
//       <button className="signInButton" onClick={signInHandler}>
//         Sign In
//       </button>
//     )}
//     {isAuthenticated && (
//       <img
//         // onClick={() => navigate("/profile")}
//         className="nav__avatar"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//         alt=""
//         onClick={profileHandler}
//       />
//     )}
//   </div>
// </div>
