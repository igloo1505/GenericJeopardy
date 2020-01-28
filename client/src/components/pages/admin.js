import React, { useContext, useEffect } from "react";
import Questions from "../questions/Questions";
import QuestionForm from "../questions/questionForm";
import QuestionFilter from "../questions/QuestionFilter";
import AuthContext from "../../context/auth/authContext";
import QuestionContext from "../../context/questions/questionContext";

const Admin = () => {
  const questionContext = useContext(QuestionContext);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  const { questions } = questionContext;

  let DynamicArray = [];
  if (questions) {
    for (var i = 0; i < questions.length; i++) {
      var catOutput = questions[i].category;
      if (DynamicArray.indexOf(catOutput) === -1) {
        DynamicArray.push(catOutput);
      }
    }
  }

  return (
    <div className="grid-2">
      <div>
        <QuestionForm DynamicArray={DynamicArray} />
      </div>
      <div>
        <QuestionFilter DynamicArray={DynamicArray} />
        <Questions />
      </div>
    </div>
  );
};

export default Admin;
