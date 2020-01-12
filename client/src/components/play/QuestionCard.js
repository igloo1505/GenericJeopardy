import React, { useContext, Fragment, useEffect } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionCard = ({ ...props }) => {
  // useEffect(() => {
  //   getQuestions();
  //   // eslint-disable-next-line
  // }, []);
  const questionContext = useContext(QuestionContext);

  const { question, answer, category, points } = props.setQuestion.out[0];

  console.log(question);

  const showAnswer = e => {
    console.log("Spacebar Pressed");
  };

  return (
    <Fragment>
      <h1>Switched to card here</h1>
      <button onClick={() => props.grid()}>Go Back</button>

      <div className="Questioncard bg-light">
        <h3 className="text-primary text-left question">{question}</h3>
        <h5 className="text-dark text-left answer">{answer}</h5>{" "}
        <button
          className="btn btn-success btn-sm TeamTwoUp"
          onClick={showAnswer}
        >
          Team Two +
        </button>
        <button
          className="btn btn-danger btn-sm TeamTwoDown"
          onClick={showAnswer}
        >
          Team Two -
        </button>
        <button
          className="btn btn-danger btn-sm TeamOneDown"
          onClick={showAnswer}
        >
          Team One -
        </button>
        <button
          className="btn btn-success btn-sm TeamOneUp"
          onClick={showAnswer}
        >
          Team One +
        </button>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
