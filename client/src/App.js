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
import PrivateRoute from "./components/routing/Private";
import Play from "./components/pages/play";
import setAuth from "./utils/setAuth";
import "./App.css";

if (localStorage.token) {
  setAuth(localStorage.token);
}

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
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path="/admin" component={Admin} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/play" component={Play} />
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
