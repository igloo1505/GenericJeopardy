import { POINTS_AWARDED, POINTS_LOST, SELECTED } from "../types";

export default (state, action) => {
  switch (action.type) {
    case POINTS_AWARDED:
      return {
        ...state
      };
    default:
      return state;
  }
};
