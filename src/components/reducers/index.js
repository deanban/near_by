import { combineReducers } from "redux";
import locationReducer from "./LocationReducer";
import filterReducer from "./FilterReducer";

export default combineReducers({
  location: locationReducer,
  filterBy: filterReducer
});
