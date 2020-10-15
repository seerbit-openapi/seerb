import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Features,
  Login,
  Pricing,
  Resources,
  Support,
  Paymet_Experiences_For_Travels_And_Tourism_Business,
  Streamlining_Payments_for_Resturants,
  Blog,
  Developers,
  Contact_us,
  Terms_of_service,
  Privacy_statement,
  Security,
  Risk,
  Payment_method
} from "./pages";
import "./styles/App.css";
import { Header, Footer } from "./components";
import terms_of_service from "./pages/terms-of-service";
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
        <Route path="/developers" component={Developers} />
        <Route
          path="/blog/Paymet_Experiences_For_Travels_And_Tourism_Business"
          component={Paymet_Experiences_For_Travels_And_Tourism_Business}
        />
        <Route
          path="/blog/Streamlining_Payments_for_Resturants"
          component={Streamlining_Payments_for_Resturants}
        />
        <Route path="/blog" component={Blog} />
        <Route path="/contact-us" component={Contact_us} />
        <Route path="/terms-of-service" component={Terms_of_service} />
        <Route path="/privacy" component={Privacy_statement} />
        <Route path="/security" component={Security} />
        <Route path="/risk" component={Risk} />
        <Route path="/payment-method" component={Payment_method} />
      </Switch>
      <Footer />
    </Fragment>
  );
};
