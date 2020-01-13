import React, { useContext, useRef, useEffect } from "react";
import QuestionContext from "../../context/questions/questionContext";

const QuestionFilter = ({ DynamicArray }) => {
  const questionContext = useContext(QuestionContext);
  const text = useRef("");
  const { filterQuestions, clearFilter, filtered } = questionContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterQuestions(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter by Category"
        onChange={onChange}
        list="categoryList"
      />
      <datalist id="categoryList">
        {DynamicArray.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>
    </form>
  );
};

export default QuestionFilter;
