import React, { useEffect, useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";

const CategoryPassed = () => {
  const questionContext = useContext(QuestionContext);
  const { getQuestions, loading, questions } = questionContext;

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);
  debugger;

  let PassedArray = [];
  let DynamicArray = [];

  for (var i = 0; i < questions.length; i++) {
    var catOutput = questions[i].category;
    if (DynamicArray.indexOf(catOutput) === -1) {
      DynamicArray.push(catOutput);
    }
  }
  console.log(DynamicArray);
};

export default CategoryPassed;
