import React, { useReducer } from "react";

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
  QUESTION_ERROR,
  GET_QUESTIONS,
  CLEAR_ERRORS,
  CLEAR_QUESTIONS,
  SET_ALERT,
  REMOVE_ALERT
} from "../types";

var answerInput =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quidem sint velit aspernatur unde sapiente minus rem delectus, similique itaque quos consequuntur dolore inventore. Non omnis obcaecati ratione laboriosam quaerat.";

const QuestionState = props => {
  const initialState = {
    questions: null,
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  //   Get questions
  const getQuestions = async () => {
    try {
      const res = await axios.get("/questions");
      dispatch({ type: GET_QUESTIONS, payload: res.data });
    } catch (err) {
      dispatch({ type: QUESTION_ERROR, payload: err.response.msg });
    }
  };

  // Add Question
  const addQuestion = async question => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/questions", question, config);
      dispatch({ type: ADD_QUESTION, payload: res.data });
    } catch (error) {
      dispatch({ type: QUESTION_ERROR, payload: error.response.msg });
    }
  };

  // Delete Question

  const deleteQuestion = async id => {
    try {
      await axios.delete(`/questions/${id}`);

      dispatch({
        type: DELETE_QUESTION,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: QUESTION_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Set Current Question
  const setCurrent = question => {
    dispatch({ type: SET_CURRENT, payload: question });
  };
  // Clear Current Question
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //   Clear question state
  const clearQuestion = () => {
    dispatch({ type: CLEAR_QUESTIONS });
  };
  // Update Question
  const updateQuestion = async question => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `/questions/${question._id}`,
        question,
        config
      );

      dispatch({
        type: UPDATE_QUESTION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: QUESTION_ERROR,
        payload: err.response.msg
      });
    }
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
        error: state.error,
        addQuestion,
        deleteQuestion,
        setCurrent,
        clearCurrent,
        updateQuestion,
        filterQuestions,
        getQuestions,
        clearFilter,
        clearQuestion
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
