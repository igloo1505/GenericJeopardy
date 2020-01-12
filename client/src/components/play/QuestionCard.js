import React, { useContext, Fragment, useEffect, useState } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PropTypes from "prop-types";

const QuestionCard = props => {
  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);
  const questionContext = useContext(QuestionContext);

  const {
    deleteQuestion,
    setCurrent,
    clearCurrent,
    questions,
    getQuestions
  } = questionContext;
  console.log(props);

  // const { _id, category, points, answer } = question;

  return (
    <Fragment>
      <h1>Switched to card here</h1>
      <button onClick={() => props.grid()}>Go Back</button>
    </Fragment>

    // <div className="card bg-light">
    //   <h3 className="text-primary text-left question">{question.question}</h3>
    //   <h5 className="text-dark text-left answer">{answer}</h5>
    //   <div style={{ float: "right" }} className="badge badge-success points">
    //     {points}
    //   </div>

    //   <div style={{ float: "right" }} className="badge badge-light category">
    //     {category}
    //   </div>

    //   <button
    //     className="btn btn-dark btn-sm edit"
    //     onClick={() => setCurrent(question)}
    //   >
    //     Edit
    //   </button>
    //   <button className="btn btn-danger btn-sm delete" onClick={onDelete}>
    //     Delete
    //   </button>
    // </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired
};

export default QuestionCard;
