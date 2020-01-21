import React, { useState, useContext, useEffect } from "react";
import QuestionContext from "../../context/questions/questionContext";
import PlayContext from "../../context/play/playContext";
import eligibleCategory from "../../context/play/eligibleCategory";
import uuid from "uuid";

const QuestionForm = ({ DynamicArray }) => {
  const questionContext = useContext(QuestionContext);
  const playContext = useContext(PlayContext);
  const past = () => {
    console.log("Change Style Function here");
  };
  const { categoriesPassed, setPassed } = playContext;
  const { current, clearCurrent, updateQuestion, questions } = questionContext;
  eligibleCategory(questions, setPassed, categoriesPassed, past);

  useEffect(() => {
    if (current !== null) {
      setQuestion(current);
    } else {
      setQuestion({
        question: "",
        answer: "",
        category: "",
        points: ""
      });
    }
  }, [questionContext, current]);

  const [question, setQuestion] = useState({
    question: "",
    answer: "",
    category: "",
    points: ""
  });
  const { answer, category } = question;

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
      points: ""
    });
    clearCurrent();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-prime">
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
        list="categoryList"
        required
      />
      <datalist id="categoryList">
        {DynamicArray.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>
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
        onChange={onChange}
        required
      />
      <div>
        <input
          type="submit"
          value={current ? "Update" : "Add Question"}
          className="btn btn-prime btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
      <h4>
        These categories have the needed questions (You need at least six):
      </h4>
      <ol className="catList">
        {categoriesPassed.map(cat => (
          <li key={uuid()}>{cat} </li>
        ))}
      </ol>
    </form>
  );
};

export default QuestionForm;
