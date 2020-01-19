import {
  SELECTED,
  CATEGORIES,
  POINTS_AWARDED_ONE,
  POINTS_AWARDED_TWO,
  POINTS_LOST_ONE,
  POINTS_LOST_TWO,
  SET_TEAMS,
  RESET
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_TEAMS:
      return {
        ...state,
        team1name: action.payload.teamOne,
        team2name: action.payload.teamTwo
      };
    case SELECTED:
      return {
        ...state,
        selected: state.selected.concat(action.payload)
      };
    case CATEGORIES:
      return {
        ...state,
        categoriesPassed: state.categoriesPassed.concat(action.payload)
      };
    case POINTS_AWARDED_ONE:
      return {
        ...state,
        team1points: state.team1points + action.payload
      };
    case POINTS_AWARDED_TWO:
      return {
        ...state,
        team2points: state.team2points + action.payload
      };
    case POINTS_LOST_ONE:
      return {
        ...state,
        team1points: state.team1points - action.payload
      };
    case POINTS_LOST_TWO:
      return {
        ...state,
        team2points: state.team2points - action.payload
      };
    case RESET:
      return {
        ...state,
        selected: [],
        categoriesPassed: [],
        team1points: 0,
        team2points: 0,
        team1name: "",
        team2name: "",
        used: false
      };
    default:
      return state;
  }
};
