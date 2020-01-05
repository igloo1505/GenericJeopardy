import React from "react";
import Questions from "../questions/Questions";
import QuestionForm from "../questions/QuestionForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <QuestionForm />
      </div>
      <div>
        <Questions />
      </div>
    </div>
  );
};

export default Home;
