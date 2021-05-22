import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand navbarcomponent" href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="form-check form-switch navbarcomponent">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
          <form className="d-flex navbarcomponent">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarcomponent"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <HomeIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link login-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
