import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import About from "./components/pages/about";
import QuestionState from "./context/questions/QuestionState";
import "./App.css";

const App = () => {
  return (
    <QuestionState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/admin" component={Admin} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </QuestionState>
  );
};

export default App;
