import React from "react";
import Card from "../components/Card";
import "../styles/styles.css";
import { Route } from "react-router-dom";
import BaseContainer from "./BaseContainer";
const Home = () => {
  return (
    <>
      <Route exact path="/">
        <BaseContainer />
      </Route>
      <Route path="/login">
        <Card />
      </Route>
    </>
  );
};

export default Home;
