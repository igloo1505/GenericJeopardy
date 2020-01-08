import React, { Fragment, useContext, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionContext from "../../context/questions/questionContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Questions = () => {
  const questionContext = useContext(QuestionContext);

  const { questions, filtered, getQuestions, loading } = questionContext;

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  if (questions.length == 0 && loading == false) {
    return (
      <h4>
        <em>Woah.</em> <br /> Add questions to this category
      </h4>
    );
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(question => (
              <CSSTransition key={question._id} timeout={500} classNames="item">
                <QuestionItem question={question} />
              </CSSTransition>
            ))
          : questions.map(question => (
              <CSSTransition key={question._id} timeout={500} classNames="item">
                <QuestionItem question={question} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Questions;
