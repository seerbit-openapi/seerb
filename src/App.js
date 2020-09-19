import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Features,
  Login,
  Pricing,
  Resources,
  Support,
  BlogDetail,
  Blog
} from "./pages";
import "./styles/App.css";
import { Header, Footer } from "./components";
// import TestHome from "./testHome";
export default () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/login" component={Login} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/features" component={Features} />
        <Route path="/resources" component={Resources} />
        <Route path="/support" component={Support} />
        <Route path="/blogdetail" component={BlogDetail} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Fragment>
  );
};
