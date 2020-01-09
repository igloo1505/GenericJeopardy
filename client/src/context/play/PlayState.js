import React, { useContext } from "react";
import QuestionContext from "../questions/questionContext";
import playContext from "./playContext";

const PlayState = () => {
  const questionContext = useContext(QuestionContext);
  const { questions } = questionContext;
  const newArray = { questions };
  console.log(newArray);

  return (
    <div>
      <PlayContext.Provider value={{ newArray }}>
        {props.children}
      </PlayContext.Provider>
    </div>
  );
};

export default PlayState;
