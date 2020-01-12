import React, { useReducer } from "react";
import PlayReducer from "./playReducer";
import QuestionContext from "../questions/questionContext";
import playContext from "./playContext";
import { SELECTED, POINTS_AWARDED, POINTS_LOST } from "../types";

const PlayState = props => {
  const initialState = {
    selected: null,
    team1points: 0,
    team2points: 0,
    team1name: "",
    team2name: "",
    used: null
  };
  const [state, dispatch] = useReducer(PlayReducer, initialState);
  const questionContext = useContext(QuestionContext);
  const { questions } = questionContext;
  const chooseQuestion = () => {
    dispatch({ type: SELECTED });
  };

  return (
    <div>
      <PlayContext.Provider
        value={{ selected: state.selected, chooseQuestion }}
      >
        {props.children}
      </PlayContext.Provider>
    </div>
  );
};

export default PlayState;
