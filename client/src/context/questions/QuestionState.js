import React, { useReducer } from "react";
import uuid from "uuid";
import axios from "axios";
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

var answerInput =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quidem sint velit aspernatur unde sapiente minus rem delectus, similique itaque quos consequuntur dolore inventore. Non omnis obcaecati ratione laboriosam quaerat.";

const QuestionState = props => {
  const initialState = {
    questions: [],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  // Add Question
  const addQuestion = question => {
    question.id = uuid.v4();
    dispatch({ type: ADD_QUESTION, payload: question });
  };

  // Delete Question
  const deleteQuestion = id => {
    dispatch({ type: DELETE_QUESTION, payload: id });
  };
  // Set Current Question
  const setCurrent = question => {
    dispatch({ type: SET_CURRENT, payload: question });
  };
  // Clear Current Question
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Question
  const updateQuestion = question => {
    dispatch({ type: UPDATE_QUESTION, payload: question });
  };
  // Filter Questions
  const filterQuestions = text => {
    dispatch({ type: FILTER_QUESTIONS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions,
        current: state.current,
        filtered: state.filtered,
        addQuestion,
        deleteQuestion,
        setCurrent,
        clearCurrent,
        updateQuestion,
        filterQuestions,
        clearFilter
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
