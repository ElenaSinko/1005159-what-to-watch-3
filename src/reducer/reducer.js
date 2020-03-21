import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as applicationState} from "./application-state/application-state.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APPLICATION_STATE]: applicationState,
});
