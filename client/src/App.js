import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import About from "./components/pages/about";
import Register from "./components/auth/Register";
import Alerts from "./components/layout/Alerts";
import Login from "./components/auth/Login";
import QuestionState from "./context/questions/QuestionState";
// import PlayState from "./context/play/PlayState";
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
  const [play, setPlay] = useState(false);
  let [onePoints, setOnePoints] = useState(0);
  let [twoPoints, setTwoPoints] = useState(0);

  return (
    <AuthState>
      <QuestionState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar play={play} onePoints={onePoints} twoPoints={twoPoints} />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute
                    exact
                    path="/"
                    component={Home}
                    play={setPlay}
                  />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path="/admin" component={Admin} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute
                    exact
                    path="/play"
                    component={Play}
                    setOnePoints={setOnePoints}
                    setTwoPoints={setTwoPoints}
                    onePoints={onePoints}
                    twoPoints={twoPoints}
                  />
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
