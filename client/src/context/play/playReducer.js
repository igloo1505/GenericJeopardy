import {
  SELECTED,
  POINTS_AWARDED_ONE,
  POINTS_AWARDED_TWO,
  POINTS_LOST_ONE,
  POINTS_LOST_TWO,
  RESET
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SELECTED:
      return {
        ...state,
        selected: state.selected.concat(action.payload)
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
