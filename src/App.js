import React from "react";
import SignupUi from "./SignupR";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginUi from "./LoginR";
import Nav from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignupUi} />

        <Route path="/loginUi" component={LoginUi} />

        <Route path="/Nav" component={Nav} />
      </Switch>
    </Router>
  );
}

export default App;
