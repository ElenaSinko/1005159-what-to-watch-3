import {combineReducers} from "redux";
import {reducer as applicationState} from "./application-state/application-state.js";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.APPLICATION_STATE]: applicationState,
  [NameSpace.USER]: user,
});
