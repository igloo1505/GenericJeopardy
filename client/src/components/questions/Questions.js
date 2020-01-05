import React, { Fragment, useContext } from "react";
import QuestionItem from "./QuestionItem";
import QuestionContext from "../../context/questions/questionContext";

const Questions = () => {
  const questionContext = useContext(QuestionContext);

  const { questions } = questionContext;

  return (
    <Fragment>
      {questions.map(question => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </Fragment>
  );
};

export default Questions;
