import React, { useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionItem = ({ question }) => {
  const questionContext = useContext(QuestionContext);
  const { deleteQuestion, setCurrent, clearCurrent } = questionContext;
  const { id, category, points } = question;

  const onDelete = () => {
    deleteQuestion(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {question.question}{" "}
        <div style={{ float: "right" }} className="badge badge-success">
          {points}
        </div>
        <div style={{ float: "right" }} className="badge badge-success">
          {category}
        </div>
      </h3>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => setCurrent(question)}
      >
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionItem;
