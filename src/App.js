import React, { Fragment } from "react";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import "./styles/App.css";

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/checkout" component={CheckOut} />
      </Switch>
    </Fragment>
  );
};
