import React, { useReducer } from "react";
import PlayReducer from "./playReducer";
import PlayContext from "./playContext";

import {
  SELECTED,
  POINTS_AWARDED_ONE,
  POINTS_AWARDED_TWO,
  POINTS_LOST_ONE,
  POINTS_LOST_TWO,
  SET_TEAMS,
  RESET,
  CATEGORIES
} from "../types";

const PlayState = props => {
  const initialState = {
    selected: [],
    team1points: 0,
    team2points: 0,
    team1name: "Team One",
    team2name: "Team Two",
    categoriesPassed: [],
    used: false
  };

  const [state, dispatch] = useReducer(PlayReducer, initialState);

  const setTeams = (teamOne, teamTwo) => {
    dispatch({ type: SET_TEAMS, payload: { teamOne, teamTwo } });
  };

  const chooseQuestion = id => {
    dispatch({ type: SELECTED, payload: id });
  };

  const setPassed = catPassed => {
    dispatch({ type: CATEGORIES, payload: catPassed });
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

  const resetGame = () => {
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
        categoriesPassed: state.categoriesPassed,
        setPassed,
        setTeams,
        chooseQuestion,
        pointsAwardedOne,
        pointsAwardedTwo,
        pointsLostOne,
        pointsLostTwo,
        resetGame
      }}
    >
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayState;
