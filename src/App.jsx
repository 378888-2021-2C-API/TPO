import React from "react";
import ForgotPassword from "./views/ForgotPassword";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import { AppDecorator } from "./AppDecorator";
import { Switch } from "@material-ui/core";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

export default function App() {
  return AppDecorator({})(function _App() {
    return (
      <React.StrictMode>
        <Router history={hist}>
          <Switch>
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  });
}
