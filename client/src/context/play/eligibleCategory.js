import React, { useEffect, useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";

const CategoryPassed = questions => {
  // const questionContext = useContext(QuestionContext);
  // const { getQuestions } = questionContext;
  debugger;
  // useEffect(() => {
  //   getQuestions();
  //   // eslint-disable-next-line
  // }, []);

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
