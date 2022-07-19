import { combineReducers } from "redux";
import { PeopleReducer } from "./PeopleReducer";

const reducers = combineReducers({
    peopleReducer: PeopleReducer,
});

export default reducers;