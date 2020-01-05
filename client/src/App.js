import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import About from "./components/pages/about";
import Register from "./components/auth/Register";
import Alerts from "./components/layout/Alerts";
import Login from "./components/auth/Login";
import QuestionState from "./context/questions/QuestionState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <QuestionState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </QuestionState>
    </AuthState>
  );
};

export default App;
