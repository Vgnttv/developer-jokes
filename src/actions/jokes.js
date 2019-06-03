import * as request from "superagent";
import { baseUrl } from "../constants";

export const ADD_JOKE = "ADD_JOKE";
export const UPDATE_JOKE = "UPDATE_JOKE";
export const UPDATE_JOKES = "UPDATE_JOKES";
export const UPDATE_JOKE_SUCCESS = "UPDATE_JOKE_SUCCESS";

const updateJokes = jokes => ({
  type: UPDATE_JOKES,
  payload: jokes
});


export const getJokes = () => dispatch => {
  request
    .get(`${baseUrl}`)
    .then(result => {
      dispatch(updateJokes(result.body));
    })
    .catch(err => console.error(err));
};