import React, { useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionItem = ({ question }) => {
  const questionContext = useContext(QuestionContext);
  const { deleteQuestion, setCurrent, clearCurrent } = questionContext;
  const { _id, category, points, answer } = question;

  const onDelete = () => {
    deleteQuestion(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-prime text-left question">{question.question}</h3>
      <h5 className="text-dark text-left answer">{answer}</h5>
      <div style={{ float: "right" }} className="badgey badgey-success points">
        {points}
      </div>

      <div style={{ float: "right" }} className="badgey badgey-light category">
        {category}
      </div>

      <button
        className="btn btn-dark btn-sm edit"
        onClick={() => setCurrent(question)}
      >
        Edit
      </button>
      <button className="btn btn-danger btn-sm delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionItem;
