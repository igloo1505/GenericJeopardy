import React, { useContext, Fragment } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionCard = ({ question }) => {
  const questionContext = useContext(QuestionContext);

  const { _id, category, points, answer } = question;
  return (
    <div className="card-container bg-light">
      <h3 className="text-primary">{points}</h3>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionCard;
