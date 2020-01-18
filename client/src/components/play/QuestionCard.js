import React, { Fragment, useState, useContext } from "react";
import PlayContext from "../../context/play/playContext";

const QuestionCard = props => {
  const playContext = useContext(PlayContext);
  const {
    pointsAwardedOne,
    pointsAwardedTwo,
    pointsLostOne,
    pointsLostTwo,
    team1name,
    team2name
  } = playContext;

  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer, points } =
    props.setQuestion.out[0] || props.setQuestion.out;

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
    if (showAnswer === true) {
      pointsLostOne(points);
      props.grid();
    }
  };
  const TeamTwoPlus = () => {
    if (showAnswer === true) {
      pointsAwardedTwo(points);
      props.grid();
    }
  };
  const TeamTwoMinus = () => {
    if (showAnswer === true) {
      pointsLostTwo(points);
      props.grid();
    }
  };
  let btnStyle = {
    width: "100%"
  };

  return (
    <Fragment>
      <div className="Questioncard bg-light">
        <h3 className="text-prime text-left question">{question}</h3>
        <h5 style={btnStyle} className="text-dark text-left answer">
          {showAnswer ? answer : ""}
        </h5>
        <button
          className="btn btn-sm btn-success  TeamTwoUp"
          onClick={TeamTwoPlus}
        >
          <h5 style={btnStyle} className="hide-sm">
            {team2name}
          </h5>
        </button>
        <button
          className="btn btn-sm btn-danger  TeamTwoDown"
          onClick={TeamTwoMinus}
        >
          <h5 style={btnStyle} className="hide-sm">
            {team2name}
          </h5>
        </button>
        <button
          className="btn btn-sm btn-danger  TeamOneDown"
          onClick={TeamOneMinus}
        >
          <h5 style={btnStyle} className="hide-sm">
            {team1name}
          </h5>
        </button>
        <button
          className="btn btn-sm btn-success TeamOneUp"
          onClick={TeamOnePlus}
        >
          <h5 className="hide-sm">{team1name}</h5>
        </button>
      </div>
    </Fragment>
  );
};

export default QuestionCard;
