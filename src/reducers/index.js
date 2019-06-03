import { combineReducers } from "redux";
import jokes from "./jokes";
import appStatus from "./appStatus";

export default combineReducers({
  appStatus,
  jokes
});
