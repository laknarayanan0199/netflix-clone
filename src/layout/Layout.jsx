import React from "react";
import Navbar from "../components/Navbar";
import "./layout.css";

const Layout = (props) => {
  return (
    <div className={`${props.className ? props.className : "layout"}`}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
