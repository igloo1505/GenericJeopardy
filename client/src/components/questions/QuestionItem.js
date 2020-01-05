import React from "react";
import PropTypes from "prop-types";

const QuestionItem = ({ question }) => {
  const { id, category, points } = question;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {question.question}{" "}
        <span style={{ float: "right" }} className="badge badge-success">
          {points}
        </span>
      </h3>
      <button className="btn btn-dark btn-sm">Edit</button>
      <button className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionItem;
