import React, { Fragment, useState, useContext } from "react";
import PlayContext from "../../context/play/playContext";

const QuestionCard = props => {
  const playContext = useContext(PlayContext);
  const {
    pointsAwardedOne,
    pointsAwardedTwo,
    pointsLostOne,
    pointsLostTwo
  } = playContext;

  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer, points } = props.setQuestion.out[0];

  window.addEventListener("keyup", function(e) {
    if (e.code === "Space") {
      setShowAnswer(true);
    }
  });

  // Yes, I know this could have been more efficient
  const TeamOnePlus = e => {
    if (showAnswer === true) {
      pointsAwardedOne(points);
      props.grid();
    }
  };
  const TeamOneMinus = () => {
    pointsLostOne(points);
    props.grid();
  };
  const TeamTwoPlus = () => {
    pointsAwardedTwo(points);
    props.grid();
  };
  const TeamTwoMinus = () => {
    pointsLostTwo(points);
    props.grid();
  };

  return (
    <Fragment>
      <div className="Questioncard bg-light">
        <h3 className="text-prime text-left question">{question}</h3>
        <h5 className="text-dark text-left answer">
          {showAnswer ? answer : ""}
        </h5>
        <button className="btn btn-success  TeamTwoUp" onClick={TeamTwoPlus}>
          <h5>Team Two +</h5>
        </button>
        <button className="btn btn-danger  TeamTwoDown" onClick={TeamTwoMinus}>
          <h5>Team Two -</h5>
        </button>
        <button className="btn btn-danger  TeamOneDown" onClick={TeamOneMinus}>
          <h5>Team One -</h5>
        </button>
        <button className="btn btn-success TeamOneUp" onClick={TeamOnePlus}>
          <h5>Team One +</h5>
        </button>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
