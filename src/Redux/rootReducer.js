import { combineReducers } from "redux";
import { posReducer } from "./positions/posReducer";
import { filterReducer } from "./filters/filterReducer";

export const rootReducer = combineReducers({
    positions: posReducer,
    filters: filterReducer
});