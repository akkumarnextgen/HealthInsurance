import React from "react";
import logo2 from "./logo2.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma5 center align-items-center">
      <img
        className=""
        style={{ width: "45px", height: "45px" }}
        src={logo2}
        alt="logo"
      />
      <span className=" f4">Medicare</span>
    </div>
  );
};

export default Logo;
