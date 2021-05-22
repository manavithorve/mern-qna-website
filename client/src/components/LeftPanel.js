import React from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
const LeftPanel = () => {
  return (
    <>
      <div class="card mt-5">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <NavLink class="card-title panel-title" to="/history">
              History
            </NavLink>
            <p class="card-text text-muted">View previously asked questions</p>
          </li>
          <li class="list-group-item">
            <NavLink class="card-title panel-title" to="/login">
              Sign up
            </NavLink>
            <p class="card-text text-muted">
              Sign up to post, answer and much more!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default LeftPanel;
