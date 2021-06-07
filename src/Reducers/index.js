import { combinedReduces } from 'redux'
import userReducer from "./userReducer"

export default allReducers({ user: userReducer });