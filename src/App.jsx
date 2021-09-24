import React from "react";
import ForgotPassword from "./views/ForgotPassword";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import LandingPage from "./views/Landing/LandingPage";
import appDecorator from "./AppDecorator";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Articules from "./views/Articules";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/articule/:id" component={Articules} />
          <Route path="/home" component={LandingPage} />
          <Route path="/profile" component={LandingPage} />
          <Route path="/controls" component={LandingPage} />
          <Route path="/vaccines" component={LandingPage} />
          <Route path="/percentile" component={LandingPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default appDecorator(App)
