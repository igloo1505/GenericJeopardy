import React from "react";
import Questions from "../questions/Questions";
import QuestionForm from "../questions/QuestionForm";
import QuestionFilter from "../questions/QuestionFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <QuestionForm />
      </div>
      <div>
        <QuestionFilter />
        <Questions />
      </div>
    </div>
  );
};

export default Home;
