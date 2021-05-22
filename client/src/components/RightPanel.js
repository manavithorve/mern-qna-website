import React from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import sample from "../images/sample";
import { NavLink } from "react-router-dom";
const RightPanel = () => {
  return (
    <>
      <div class="card mt-5 right-panel">
        <div class="card-body">
          <h5 class="card-title panel-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <img src={sample} class="card-img-top" alt="sample" />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};
export default RightPanel;
