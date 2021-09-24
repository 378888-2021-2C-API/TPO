import React from "react";
import ForgotPassword from "./views/ForgotPassword";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import LandingPage from "./views/LandingPage";
import appDecorator from "./AppDecorator";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default appDecorator(App)
