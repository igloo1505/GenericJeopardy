import React, { useReducer } from "react";
import PlayReducer from "./playReducer";
import QuestionContext from "../questions/questionContext";
import PlayContext from "./playContext";
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
  

  const chooseQuestion = () => {
    dispatch({ type: SELECTED, payload: });
  };

  return (
    <div>
      <PlayContext.Provider
        value={{ 
          selected: state.selected,
          team1name: state.team1name,
          team2name: state.team2name,
          team1points: state.team1points,
          team2points: state.team2points,
          chooseQuestion }}
      >
        {props.children}
      </PlayContext.Provider>
    </div>
  );
};

export default PlayState;
