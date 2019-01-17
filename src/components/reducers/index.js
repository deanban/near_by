import { combineReducers } from "redux";
import locationReducer from "./LocationReducer";
import filterReducer from "./FilterReducer";
import searchReducer from "./SearchReducers";

export default combineReducers({
  location: locationReducer,
  filterBy: filterReducer,
  places: searchReducer
});
