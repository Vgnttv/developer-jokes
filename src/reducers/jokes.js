import {UPDATE_JOKES } from "../actions/jokes";

export default (state = null, { type, payload }) => {
  switch (type) {

    case UPDATE_JOKES:
      return payload.reduce((jokes, joke) => {
        jokes[joke.id] = joke;
        return jokes;
      }, {});

    default:
      return state;
  }
};
