import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import pizzasReducers from './pizzasReducers'
import cartPizzas from "./cartPizzas";

const mainReducers = combineReducers({
    usersReducer, pizzasReducers, cartPizzas
})

export default mainReducers