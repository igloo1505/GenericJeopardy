import React, { useState } from "react";
import "./QuestionStyle.css";

const QuestionForm = () => {
  const [questionData, setQuestion] = useState({
    question: "",
    answer: "",
    category: "",
    points: Number
  });
  const { question, answer, category, points } = questionData;
  const onChange = e =>
    setQuestion({ ...questionData, [e.target.name]: e.target.value });
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>

      <input
        type="text"
        placeholder="Question"
        name="question"
        value={question}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Answer"
        name="answer"
        value={answer}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={category}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="points"
        name="points"
        value={points}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value="AddQuestion"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default QuestionForm;
