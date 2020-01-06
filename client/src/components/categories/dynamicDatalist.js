import React, { useContext } from "react";
import QuestionContext from "../../context/questions/questionContext";

const DynamicDatalist = () => {
  const questionContext = useContext(QuestionContext);
  const { questions } = questionContext;
  let DynamicArray = [];

  for (var i = 0; i < questions.length; i++) {
    var category = questions[i].category;
    if (DynamicArray.indexOf(category) == -1) {
      DynamicArray.push(category);
    }
  }
  console.log(DynamicArray);
  return DynamicArray;
};

export default DynamicDatalist;
