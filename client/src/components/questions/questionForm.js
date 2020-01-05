import React, { useState } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    category: "",
    points: Number
  });
  const { answer, category, points } = question;

  const onChange = e =>
    setQuestion({ ...question, [e.target.name]: e.target.value });

  return (
    <form>
      <h2 className="text-primary">Add Question</h2>
      <input
        type="text"
        placeholder="Question"
        name="question"
        value={question.question}
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
        placeholder="Points"
        name="points"
        value={points}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default QuestionForm;
