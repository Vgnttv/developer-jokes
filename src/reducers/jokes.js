import {UPDATE_JOKES } from "../actions/jokes";

export default (state = null, action = {}) => {
  switch (action.type) {
    case UPDATE_JOKES:
      return action.payload;

    default:
      return state;
  }
};
