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
  CLEAR_QUESTIONS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
        loading: false
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          question => question._id !== action.payload
        ),
        loading: false
      };
    case CLEAR_QUESTIONS:
      return {
        ...state,
        questions: null,
        filtered: null,
        error: null,
        current: null
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        questions: state.questions.map(question =>
          question._id === action.payload._id ? action.payload : question
        ),
        loading: false
      };
    case FILTER_QUESTIONS:
      return {
        ...state,
        filtered: state.questions.filter(question => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return question.category.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false
      };
    case QUESTION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
