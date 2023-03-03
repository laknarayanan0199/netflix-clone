import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflix from "../../assests/netflix.png";
import "./navbar.css";

const Navbar = () => {
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

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            navigate("/home");
          }}
          className="nav__logo"
          src={netflix}
          alt=""
        />
        <div className="nav__links">
          <Link to={"/home"}>Home</Link>
          <Link to={"/series"}>Series</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/my-list"}>My List</Link>
        </div>
      </div>
      <img
        // onClick={() => navigate("/profile")}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
