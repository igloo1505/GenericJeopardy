import React, { useReducer, useContext } from "react";

import PlayContext from "./playContext";
import playReducer from "./playReducer";

import {
  POINTS_AWARDED,
  POINTS_LOST,
  SELECTED,
  GET_QUESTIONS,
  QUESTION_ERROR
} from "../types";

const PlayState = props => {
  const initState = {
      questions: {this.props.questions},
    selected: null,
    team1: null,
    team2: null
  };
  const [state, dispatch] = useReducer(playReducer, initState);
  const 


  const select = () => {
    dispatch({ type: SELECTED });
  };
  //   Get questions
  //   const getQuestions = async () => {
  //     try {
  //       const res = await axios.get("/questions");
  //       dispatch({ type: GET_QUESTIONS, payload: res.data });
  //     } catch (err) {
  //       dispatch({ type: QUESTION_ERROR, payload: err.response.msg });
  //     }
  //   };

  return (
    <PlayContext.Provider
      value={{
        questions
      }}
    >
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayState;
