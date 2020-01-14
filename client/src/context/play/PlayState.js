import React, { useReducer } from "react";
import PlayReducer from "./playReducer";
import PlayContext from "./playContext";

import {
  SELECTED,
  POINTS_AWARDED_ONE,
  POINTS_AWARDED_TWO,
  POINTS_LOST_ONE,
  POINTS_LOST_TWO,
  RESET
} from "../types";

const PlayState = props => {
  const initialState = {
    selected: null,
    team1points: 0,
    team2points: 0,
    team1name: "",
    team2name: "",
    used: false
  };
  const [state, dispatch] = useReducer(PlayReducer, initialState);

  const chooseQuestion = key => {
    dispatch({ type: SELECTED, payload: key });
  };

  const pointsAwardedOne = points => {
    dispatch({ type: POINTS_AWARDED_ONE, payload: points });
  };

  const pointsAwardedTwo = points => {
    dispatch({ type: POINTS_AWARDED_TWO, payload: points });
  };

  const pointsLostOne = points => {
    dispatch({ type: POINTS_LOST_ONE, payload: points });
  };
  const pointsLostTwo = points => {
    dispatch({ type: POINTS_LOST_TWO, payload: points });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <PlayContext.Provider
      value={{
        selected: state.selected,
        team1name: state.team1name,
        team2name: state.team2name,
        team1points: state.team1points,
        team2points: state.team2points,
        chooseQuestion,
        pointsAwardedOne,
        pointsAwardedTwo,
        pointsLostOne,
        pointsLostTwo,
        reset
      }}
    >
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayState;
