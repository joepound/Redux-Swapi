/* we need our action types here*/
import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
