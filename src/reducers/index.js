import { combineReducers } from "redux";
import messages from "./messages";


const rootReducers = combineReducers({
  messages: messages
})

export default rootReducers;
