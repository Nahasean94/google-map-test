import {combineReducers} from 'redux'
import markerReducers from "./reducers/markerReducers";
import dataReducers from "./reducers/dataReducers";

export default combineReducers({
    markerReducers,
    dataReducers
})