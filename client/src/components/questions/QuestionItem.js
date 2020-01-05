import React from "react";

const QuestionItem = ({ question }) => {
  const { id, category, points } = question;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {question.question}{" "}
        <span className="badge badge-success">{points}</span>
      </h3>
    </div>
  );
};

export default QuestionItem;
