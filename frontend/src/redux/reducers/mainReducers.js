import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import pizzasReducers from './pizzasReducers'
import cartShopPizzas from "./cartShopPizzas";

const mainReducers = combineReducers({
    usersReducer, pizzasReducers, cartShopPizzas
})

export default mainReducers