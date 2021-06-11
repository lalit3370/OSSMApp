import { combineReducers } from 'redux'
import userReducer from "./userReducer"
import loggedInReducer from './loggedInReducer'
export default allReducers = combineReducers({ user: userReducer, loggedIn: loggedInReducer });