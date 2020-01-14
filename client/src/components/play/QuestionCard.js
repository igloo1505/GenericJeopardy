import React, { Fragment, useState } from "react";

const QuestionCard = ({
  setQuestion,
  setOnePoints,
  setTwoPoints,
  onePoints,
  twoPoints,
  ...props
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer, points } = setQuestion.out[0];

  console.log(question);

  window.addEventListener("keyup", function(e) {
    if (e.code === "Space") {
      setShowAnswer(true);
    }
  });

  const TeamOnePlus = () => {
    // setOnePoints(points);
    props.reset(false);
  };

  const TeamTwoPlus = e => {
    debugger;
    setTwoPoints({ points });
  };
  const TeamOneMinus = e => {
    setOnePoints({ points });
  };
  const TeamTwoMinus = e => {
    setTwoPoints({ points });
  };

  return (
    <Fragment>
      <div className="Questioncard bg-light">
        <h3 className="text-primary text-left question">{question}</h3>
        <h5 className="text-dark text-left answer">
          {showAnswer ? answer : ""}
        </h5>
        <button
          className="btn btn-success btn-sm TeamTwoUp"
          onClick={TeamTwoPlus}
        >
          <h5>Team Two +</h5>
        </button>
        <button
          className="btn btn-danger btn-sm TeamTwoDown"
          onClick={TeamTwoMinus}
        >
          <h5>Team Two -</h5>
        </button>
        <button
          className="btn btn-danger btn-sm TeamOneDown"
          onClick={TeamOneMinus}
        >
          <h5>Team One -</h5>
        </button>
        <button
          className="btn btn-success btn-sm TeamOneUp"
          onClick={TeamOnePlus}
        >
          <h5>Team One +</h5>
        </button>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
