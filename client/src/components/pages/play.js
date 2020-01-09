import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";
import QuestionCard from "../play/QuestionCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Play = () => {
  const questionContext = useContext(QuestionContext);

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
        {questions === null ? (
          <h1>Getting Questions</h1>
        ) : (
          questions.map(question => <QuestionCard question={question} />)
        )}
      </div>
    </Fragment>
  );
};

export default Play;
