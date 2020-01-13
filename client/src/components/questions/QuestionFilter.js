import React, { useContext, useRef, useEffect, useState } from "react";

import QuestionContext from "../../context/questions/questionContext";
import QuestionState from "../../context/questions/QuestionState";

const QuestionFilter = () => {
  const questionContext = useContext(QuestionContext);
  const text = useRef("");
  const { filterQuestions, clearFilter, filtered, questions } = questionContext;

  let DynamicArray = [];
  if (questions) {
    for (var i = 0; i < questions.length; i++) {
      var catOutput = questions[i].category;
      if (DynamicArray.indexOf(catOutput) == -1) {
        DynamicArray.push(catOutput);
      }
    }
  }

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
