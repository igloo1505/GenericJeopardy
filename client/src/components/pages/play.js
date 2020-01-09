import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import QuestionCard from "../play/QuestionCard";
import PlayContext from "../../context/play/playContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Play = () => {
  const questionContext = useContext(QuestionContext);
  const playContext = useContext(PlayContext);

  const { questions, getQuestions, loading } = questionContext;
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);
  console.log(questions);

  return (
    <Fragment>
      <div>
        <h1>Play layout goes here</h1>
      </div>
      <div className="mainGrid">
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
        <div className="card-container bg-light" points="100">
          <h3 className="text-primary">100</h3>
        </div>
        <div className="card-container bg-light" points="200">
          <h3 className="text-primary">200</h3>
        </div>
        <div className="card-container bg-light" points="300">
          <h3 className="text-primary">300</h3>
        </div>
        <div className="card-container bg-light" points="400">
          <h3 className="text-primary">400</h3>
        </div>
        <div className="card-container bg-light" points="500">
          <h3 className="text-primary">500</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Play;
