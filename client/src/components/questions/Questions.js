import React, { Fragment, useContext } from "react";
import QuestionItem from "./QuestionItem";
import QuestionContext from "../../context/questions/questionContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Questions = () => {
  const questionContext = useContext(QuestionContext);

  const { questions, filtered } = questionContext;

  if (questions === [] || questions.length == 0) {
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
              <CSSTransition key={question.id} timeout={500} classNames="item">
                <QuestionItem question={question} />
              </CSSTransition>
            ))
          : questions.map(question => (
              <CSSTransition key={question.id} timeout={500} classNames="item">
                <QuestionItem question={question} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Questions;
