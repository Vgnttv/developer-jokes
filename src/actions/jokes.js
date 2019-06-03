import * as request from "superagent";
import { baseUrl, randomJokesUrl } from "../constants";


export const UPDATE_JOKES = "UPDATE_JOKES";


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

export const getRandomJokes = ()=> dispatch => {
  request
  .get (`${randomJokesUrl}`)
  .then(result => {
    dispatch(updateJokes(result.body));
  })
  .catch(err => console.error(err));

}