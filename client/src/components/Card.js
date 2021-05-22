import React from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup";
import Login from "./Login";

import logo from "../images/logo.png";
const Card = () => {
  return (
    <>
      <div className="container-lg mycard">
        <img className="form-logo" src={logo} alt="logo" />
        <br />
        <Signup />
        <Login />
      </div>
    </>
  );
};

export default Card;
