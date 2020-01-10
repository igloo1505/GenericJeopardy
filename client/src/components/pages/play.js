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
      <h1>Main Grid Here</h1>
      <div className="mainGrid">
        <div className="col1">
          <div className="category1">
            <h2>Category 1</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col2">
          <div className="category2">
            <h2>Category 2</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col3">
          <div className="category3">
            <h2>Category 3</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col4">
          <div className="category4">
            <h2>Category 4</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col5">
          <div className="category5">
            <h2>Category 5</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
        <div className="col6">
          <div className="category6">
            <h2>Category 6</h2>
          </div>
          <div className="card-container bg-primary" points="100">
            <h3 className="text-light">100</h3>
          </div>
          <div className="card-container bg-primary" points="200">
            <h3 className="text-light">200</h3>
          </div>
          <div className="card-container bg-primary" points="300">
            <h3 className="text-light">300</h3>
          </div>
          <div className="card-container bg-primary" points="400">
            <h3 className="text-light">400</h3>
          </div>
          <div className="card-container bg-primary" points="500">
            <h3 className="text-light">500</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Play;
