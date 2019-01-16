import { combineReducers } from "redux";
import locationReducer from "./LocationReducer";

export default combineReducers({
  location: locationReducer
});
