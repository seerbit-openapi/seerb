import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Features, Login, Pricing, Resources, Support } from "./pages";
import "./styles/App.css";

export default () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/login" component={Login} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/features" component={Features} />
        <Route path="/resources" component={Resources} />
        <Route path="/support" component={Support} />
      </Switch>
    </Fragment>
  );
};
