import React, { useReducer } from "react";
import uuid from "uuid";
import QuestionContext from "./questionContext";
import QuestionReducer from "./questionReducer";
import {
  ADD_QUESTION,
  DELETE_QUESTION,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUESTION,
  FILTER_QUESTIONS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

const QuestionState = props => {
  const initialState = {
    questions: [
      {
        id: 1,
        question: "What is the craziest drug on the planet?",
        answer: "Bath Salts",
        points: 400,
        category: "Crazy Shit"
      },
      {
        id: 2,
        question: "What the shit?",
        answer: "Peanut Butter",
        points: 200,
        category: "Woah"
      },
      {
        id: 3,
        question: "Why are you single?",
        answer: "Because I'm lame",
        points: 300,
        category: "Crazy Shit"
      }
    ]
  };
  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  // Add Question

  // Delete Question

  // Set Current Question

  // Clear Current Question

  // Update Question

  // Filter Questions

  // Clear Filter

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
