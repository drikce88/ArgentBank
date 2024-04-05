import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userProfileReducer from "./userProfileReducer";



export default combineReducers({
    auth: authReducer,
    userProfile: userProfileReducer
})