import React, { useContext, Fragment, useEffect, useState } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionCard = ({ ...props }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer, category, points } = props.setQuestion.out[0];

  console.log(question);

  const Test = e => {
    {
      console.log("test ran");
    }
  };

  window.addEventListener("keyup", function(e) {
    if (e.code == "Space") {
      setShowAnswer(true);
    }
  });

  return (
    <Fragment>
      <button onClick={() => props.grid()}>Go Back</button>

      <div className="Questioncard bg-light">
        <h3 className="text-primary text-left question">{question}</h3>
        <h5 className="text-dark text-left answer">
          {showAnswer ? answer : ""}
        </h5>
        <button className="btn btn-success btn-sm TeamTwoUp" onClick={Test}>
          <h5>Team Two +</h5>
        </button>
        <button className="btn btn-danger btn-sm TeamTwoDown" onClick={Test}>
          <h5>Team Two -</h5>
        </button>
        <button className="btn btn-danger btn-sm TeamOneDown" onClick={Test}>
          <h5>Team One -</h5>
        </button>
        <button className="btn btn-success btn-sm TeamOneUp" onClick={Test}>
          <h5>Team One +</h5>
        </button>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
