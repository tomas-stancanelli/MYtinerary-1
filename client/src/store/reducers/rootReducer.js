import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import singleCityReducer from './singleCityReducer'
import itinerariesForACity from './itinerariesReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({citiesReducer, singleCityReducer, itinerariesForACity, userReducer});

export default rootReducer;