import React, { useState, useContext, useEffect } from "react";
import QuestionContext from "../../context/questions/questionContext";
import "./questionStyle.css";

const QuestionForm = () => {
  const questionContext = useContext(QuestionContext);

  const {
    addQuestion,
    current,
    clearCurrent,
    updateQuestion
  } = questionContext;

  useEffect(() => {
    if (current !== null) {
      setQuestion(current);
    } else {
      setQuestion({
        question: "",
        answer: "",
        category: "",
        points: Number
      });
    }
  }, [questionContext, current]);

  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    category: "",
    points: Number
  });
  const { answer, category, points } = question;

  const onChange = e =>
    setQuestion({ ...question, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      questionContext.addQuestion(question);
    } else {
      updateQuestion(question);
      clearCurrent();
    }
    setQuestion({
      question: "",
      answer: "",
      category: "",
      points: Number
    });
    clearCurrent();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Question" : "Add Question"}
      </h2>
      <input
        type="text"
        placeholder="Question"
        name="question"
        value={question.question}
        onChange={onChange}
        required
      />
      <textarea
        type="text"
        placeholder="Answer"
        name="answer"
        value={answer}
        onChange={onChange}
        required
        style={{ height: "8rem" }}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={onChange}
        required
      />
      <datalist id="pointsData">
        <option value="100" />
        <option value="200" />
        <option value="300" />
        <option value="400" />
        <option value="500" />
      </datalist>
      <input
        type="number"
        placeholder="Points"
        name="points"
        list="pointsData"
        value={points}
        onChange={onChange}
        required
      />
      <div>
        <input
          type="submit"
          value={current ? "Update" : "Add Question"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
