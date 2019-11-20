import { combineReducers } from "redux";
import citiesReducer from "./cityReducer";
import singleCityReducer from './singleCityReducer'


const rootReducer = combineReducers({citiesReducer, singleCityReducer});


export default rootReducer;