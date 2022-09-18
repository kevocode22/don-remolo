import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import pizzasReducers from './pizzasReducers'

const mainReducers = combineReducers({
    usersReducer, pizzasReducers
})

export default mainReducers