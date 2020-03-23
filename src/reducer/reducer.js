import {combineReducers} from "redux";
import {reducer as applicationState} from "./application-state/application-state.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.APPLICATION_STATE]: applicationState,
});
