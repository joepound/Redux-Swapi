// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get("https://swapi.co/api/people")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: FETCHING_FAILURE, payload: error }));
};
